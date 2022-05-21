import { v4 as uuidv4 } from "uuid";

class UsersOnline {
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: string;
  long: string;
  equalCity: boolean;
  plane: boolean;
  emoji: boolean;
  song: boolean;
  created_at: Date;

}

export { UsersOnline };
