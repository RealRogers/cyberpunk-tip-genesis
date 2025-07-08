
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CircuitBoard, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Zod schema for form validation
const formSchema = z.object({
  name: z.string()
    .min(3, { message: "ARTIST_TAG must be at least 3 characters" })
    .max(50, { message: "ARTIST_TAG cannot exceed 50 characters" }),
  bio: z.string()
    .min(10, { message: "DATA_STREAM must be at least 10 characters" })
    .max(300, { message: "DATA_STREAM cannot exceed 300 characters" }),
  image: z.string()
    .url({ message: "AVATAR_MATRIX must be a valid URL" }),
  genre: z.string()
    .min(3, { message: "NEURAL_GENRE must be at least 3 characters" })
    .max(30, { message: "NEURAL_GENRE cannot exceed 30 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ArtistRegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      bio: '',
      image: '',
      genre: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('>>> ARTIST_NODE_DATA_VALIDATED <<<');
      console.log('NEURAL_SIGNATURE:', data);
      console.log('STATUS: REGISTRATION_COMPLETE');
      
      // Reset form after successful submission
      form.reset();
      
      // Here you would typically make an actual API call to create the artist
      // const response = await fetch('/api/artists', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
    } catch (error) {
      console.error('REGISTRATION_ERROR:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Artist Tag Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                    ARTIST_TAG
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your neural identifier..."
                      className="bg-gray-800/50 border-gray-700 text-white font-mono focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 text-xs font-mono">
                    Your unique identifier in the network (3-50 chars)
                  </FormDescription>
                  <FormMessage className="text-pink-400 font-mono text-xs" />
                </FormItem>
              )}
            />

            {/* Bio Field */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                    DATA_STREAM
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Upload your neural biography..."
                      className="bg-gray-800/50 border-gray-700 text-white font-mono focus:border-cyan-500 focus:ring-cyan-500/20 min-h-[120px] resize-none"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 text-xs font-mono">
                    Your digital essence and artistic mission ({field.value?.length || 0}/300)
                  </FormDescription>
                  <FormMessage className="text-pink-400 font-mono text-xs" />
                </FormItem>
              )}
            />

            {/* Image URL Field */}
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                    AVATAR_MATRIX
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="url"
                      placeholder="https://your-neural-avatar.url"
                      className="bg-gray-800/50 border-gray-700 text-white font-mono focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 text-xs font-mono">
                    Visual representation of your digital persona
                  </FormDescription>
                  <FormMessage className="text-pink-400 font-mono text-xs" />
                </FormItem>
              )}
            />

            {/* Genre Field */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-cyan-400 font-mono text-sm uppercase tracking-wider">
                    NEURAL_GENRE
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Define your artistic frequency..."
                      className="bg-gray-800/50 border-gray-700 text-white font-mono focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </FormControl>
                  <FormDescription className="text-gray-400 text-xs font-mono">
                    Your artistic classification in the neural network
                  </FormDescription>
                  <FormMessage className="text-pink-400 font-mono text-xs" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white font-mono uppercase tracking-wider py-3 h-auto disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-500/50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    EXECUTING_REGISTRATION...
                  </>
                ) : (
                  <>
                    <CircuitBoard className="mr-2 h-4 w-4" />
                    EXECUTE_REGISTRATION
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}
