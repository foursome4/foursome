import { v4 as uuidv4 } from "uuid";

class Accounts {
  nickname: string;
  username: string;
  role: string;
  type: string;
  email: string;
  phone: string;
  password: string;

  created_at: Date;
}

export { Accounts };
