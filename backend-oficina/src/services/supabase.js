// src/config/supabase.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Puxamos as chaves do seu "Cofre" (.env)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Criamos a conexão única (o cliente)
const supabase = createClient(supabaseUrl, supabaseKey);

// E olha o "véu" de exportação de novo!
module.exports = { supabase };