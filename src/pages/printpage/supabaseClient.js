// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Thay bằng URL và anon key của bạn từ Supabase
const supabaseUrl = 'https://gkohmldjunexltfmwoxb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrb2htbGRqdW5leGx0Zm13b3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2NjA5NDIsImV4cCI6MjA0NjIzNjk0Mn0.k9fUk7CWHPjNwBmJ1zmSpwsqxRGs4HVny7HeaC6XJC8';
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
