import { IServerIO, ISocket } from "../socket.interface";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface usersonline {
  socket_id: string;
  client_id: string;
  messages: string[];
}

export const handlerWebSockets = (io: IServerIO) => {
  const clients: usersonline[] = [];
  io.on("connection", (socket: ISocket) => {
    io.to(socket.id).emit("users-online", clients);
    const result = clients.findIndex((c) => c.client_id === socket.userId);
    if (result === -1) {
      clients.push({
        socket_id: socket.id,
        client_id: socket.userId,
        messages: [],
      });
    }

    socket.on(
      "send-messages",
      (message: { text: string; client_id: string }) => {
        const client = clients.find((c) => c.client_id === message.client_id);
        io.to(client.socket_id).emit("receive-message", message.text);
      }
    );

    socket.on("disconnect", () => {
      const result = clients.findIndex((c) => c.client_id === socket.userId);
      clients.splice(result, 1);
    });
  });
};
