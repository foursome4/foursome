import { v4 as uuidv4 } from "uuid";

class UsersOnline {
  idAccount: string;
  username: string;
  type: string;
  nickname: string;
  avatar: string;
  relationship: string;
  lat: string;
  long: string;
  city: string;
  uf: string;
  actualCity: string;
  actualUf: string;
  equalCity: boolean;
  plane: boolean;
  emoji: string;
  song: boolean;
  invisible: boolean;
  created_at: Date;

}

export { UsersOnline };
