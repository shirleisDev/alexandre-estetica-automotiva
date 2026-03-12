
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // Forma moderna de carregar o .env

const app = express();

app.use(cors());
app.use(express.json());

// No padrão "import", precisamos colocar a extensão .js no final do arquivo
import agendaRoutes from './routes/agenda.js'; 
app.use('/api', agendaRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Motor roncando na porta ${PORT} (Modo ES Modules)`);
});