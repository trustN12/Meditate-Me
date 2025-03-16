import { useAuth } from "@clerk/clerk-react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nrkjomdlnieqdtgqigyy.supabase.co"; // Replace with your actual Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ya2pvbWRsbmllcWR0Z3FpZ3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTUwNzAsImV4cCI6MjA1NzE3MTA3MH0.W_-XnmP17SY92luM7EgLv0MJ4geSQmSYyavAQDs0aM4"; // Replace with your actual API Key


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


// Function to get Supabase client with Clerk authentication
export const getSupabaseWithAuth = () => {
  const { getToken } = useAuth(); // Clerk auth hook (must be used inside a component)

  return {
    supabase,
    getToken, // Pass this function so we can get the user token later
  };
};