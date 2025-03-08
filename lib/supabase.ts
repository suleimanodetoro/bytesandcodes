// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Set default values for build time to prevent build errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// This ensures the supabase client is initialized without errors during build
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// We can add a helper function to check if we have real credentials
export const hasSupabaseCredentials = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co';
};