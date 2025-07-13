// supabaseClient.ts
// First, create a Supabase client utility. This should be in a separate file.
// Make sure to install @supabase/supabase-js via npm/yarn.
// Replace SUPABASE_URL and SUPABASE_ANON_KEY with your actual Supabase project credentials.

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);