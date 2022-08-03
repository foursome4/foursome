
class News {
  id: string;  // id do registro
  patron: string; // Id do padrinho oara ser notificado
  idAccount: string;  // Usuário que enviou a notificação na moderação
  reply: boolean; // O usuário pode responder?
  destination: string; // Id do usuário que recebe ou "All" para todos.
  destinationName: string; 
  username: string;
  nickname: string;
  title: string;  
  text: string;
  link: string;
  type: string; // Texto, Foto ou vídeo
  priority: string; 
  created_at: Date;
}

export { News };
