import { v4 as uuidv4 } from "uuid";

class Posts {
  idAccount: string;
  avatar: string;
  nickname:string;
  username:string;
  nameGroup: string;
  nameForum: string;
  nameEvent: string;
  idEvent: string;
  idGroup: string;
  idForum: string;
  type: string;
  text: string;
  link: string;
  like: number;
  typeAccount: string;
  ufAccount: string;
  cityAccount: string;
  created_at: Date;

}

export { Posts };
