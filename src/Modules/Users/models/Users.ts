import { v4 as uuidv4 } from "uuid";

class Users {
  id?: string;
  username: string;
  nickname: string;
  role: string; // guest, member
  status: string; // active, inactive, suspended, banned
  plan: string;
  active_plan: string;
  birth_date: string;
  email: string;
  phone: string;
  uf: string;
  city: string;
  sexual_orientation: string;
  search: string;
  sign: string;
  password: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Users };
