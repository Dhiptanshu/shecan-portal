import { createClient } from '@supabase/supabase-js';

/*
  SUPABASE SETUP INSTRUCTIONS:
  1. Create a project in Supabase.
  2. Run this in the SQL Editor to create the table:

  CREATE TABLE submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
  );
*/

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// You can use the anon key for public inserts, but service role key is safer for admin queries if RLS is enabled.
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
