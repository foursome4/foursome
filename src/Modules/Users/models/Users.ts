import { v4 as uuidv4 } from "uuid";

interface ICharacteristicsUsers {
  height: number;
  weight: string;
  physique: string;
  ethnicity: string;
  eyes: string;
  hair: string;
  type: string;
  tattoos: string;
  smokes: string;
  education: string;
}

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
  characteristics: ICharacteristicsUsers;
  friends: string[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Users };
