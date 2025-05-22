const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // Use service role key for full access
);

module.exports = supabase;
