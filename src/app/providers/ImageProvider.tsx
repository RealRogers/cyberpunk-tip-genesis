// contexts/SupabaseStorageContext.tsx
// This is the context provider for handling image uploads to Supabase Storage.
// It provides an uploadImage function that takes a File, uploads it to a specified bucket (e.g., 'avatars'),
// and returns the public URL. The path is generated uniquely using a timestamp and file name to avoid conflicts.
// Authentication: Assumes the Supabase client is authenticated if needed (e.g., via Privy or Supabase auth).
// For public reads and authenticated writes, configure your Supabase Storage bucket policies accordingly.
// Bucket setup: Create a bucket named 'avatars' in Supabase dashboard with public read access if avatars should be publicly viewable.

import React, { createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/app/lib/supabaseClient'; // Adjust path to your supabaseClient files

interface SupabaseStorageContextType {
  uploadImage: (file: File, bucket?: string) => Promise<string>;
  isUploading: boolean;
  uploadError: string | null;
}

const SupabaseStorageContext = createContext<SupabaseStorageContextType | undefined>(undefined);

export const SupabaseStorageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState<string | null>(null);

  const uploadImage = async (file: File, bucket: string = 'artistspics'): Promise<string> => {
    setIsUploading(true);
    setUploadError(null);

    try {
      // Generate a unique path: e.g., avatars/timestamp-fileName.ext
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false, // Don't overwrite if exists (though unique name should prevent this)
        });

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      // Get the public URL
      const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

      if (!data?.publicUrl) {
        throw new Error('Failed to get public URL');
      }

      return data.publicUrl;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown upload error';
      setUploadError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <SupabaseStorageContext.Provider value={{ uploadImage, isUploading, uploadError }}>
      {children}
    </SupabaseStorageContext.Provider>
  );
};

export const useSupabaseStorage = (): SupabaseStorageContextType => {
  const context = useContext(SupabaseStorageContext);
  if (undefined === context) {
    throw new Error('useSupabaseStorage must be used within a SupabaseStorageProvider');
  }
  return context;
};