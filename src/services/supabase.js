import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://mdohyczjlsrblzcugdfa.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kb2h5Y3pqbHNyYmx6Y3VnZGZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNzMwMTEsImV4cCI6MjA1MTg0OTAxMX0.yIZw1WfUfiM5a3TVAXu8rfrRc9hEr2T20alrnd_WEDs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
