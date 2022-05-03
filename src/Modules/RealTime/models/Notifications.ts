import { v4 as uuidv4 } from "uuid";

class Notifications {
  idPatrono: string;
  idAccount: string;
  idFriend: string;
  type: string;
  text: string;
  idPost:string;
  created_at: Date;
}

export { Notifications };
