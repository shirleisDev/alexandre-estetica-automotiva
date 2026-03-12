

import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// Importando as rotas da gaveta certa (com o .js no final)
import agendaRoutes from './routes/agenda.js'; 
app.use('/api', agendaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Motor da Oficina rodando na porta ${PORT}`);
});
