import { v4 as uuidv4 } from "uuid";

class Messages {
  idRoom: string;
  idAccount: string;
  link: string;
  avatar: string;
  nickname: string;
  username: string;
  text: string;
  created_at: Date;

}

export { Messages };
