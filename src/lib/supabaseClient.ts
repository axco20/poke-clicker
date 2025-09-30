import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ulxksaqicnuullbmhxfg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVseGtzYXFpY251dWxsYm1oeGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzE1ODEsImV4cCI6MjA3NDY0NzU4MX0.4ifTQBPq0LwHiP1cCAijXzVZbUP_FmK0Lqf7U1-8yKs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
