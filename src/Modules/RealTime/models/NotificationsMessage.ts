import { v4 as uuidv4 } from "uuid";

class NotificationsMessage {
  idAccount: string;
  idFriend: string;
  text: string;
  created_at: Date;

}

export { NotificationsMessage };
