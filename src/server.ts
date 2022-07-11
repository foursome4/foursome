import { server } from "./http";
import "./websocket"

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Server initialized! Access the link: http://localhost:${port}`);
  console.log(process.env.STRINGCONNECTION);
});