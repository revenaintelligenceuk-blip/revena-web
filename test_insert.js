import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  console.log('Inserting row...');
  const { data, error } = await supabase
    .from('contacts')
    .insert([
      { name: 'Direct Test', email: 'direct@test.com', message: 'Testing direct insert from Node' }
    ]);
    
  if (error) {
    console.error('INSERT ERROR:', error);
  } else {
    console.log('INSERT SUCCESS:', data);
  }
}

testInsert();
