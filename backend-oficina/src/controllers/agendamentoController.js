
// Este é o Controller: Ele cuida da lógica da requisição
export const registrarAgendamento = async (req, res) => {
  const { email } = req.body; // Pega o e-mail que o React enviou

  // Validação de Backend (Segurança)
  if (!email || !email.includes('@')) {
    return res.status(400).json({ erro: "E-mail inválido!" });
  }

  console.log(`E-mail da oficina recebido: ${email}`);

  // Futuramente aqui chamaremos o Service para salvar no Banco
  return res.status(201).json({ 
    mensagem: "Sucesso! Agendamento registrado no backend.",
    contato: email 
  });
};

