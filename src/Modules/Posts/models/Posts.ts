import { v4 as uuidv4 } from "uuid";

class Posts {
  idAccount: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
  created_at: Date;

}

export { Posts };
