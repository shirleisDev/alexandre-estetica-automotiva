import express from 'express';
const router = express.Router();
// IMPORTANTE: Adicione o .js no final do caminho abaixo
import { registrarAgendamento } from '../controllers/agendamentoController.js';

router.post('/agendar', registrarAgendamento);

export default router; // <--- Exportação moderna

