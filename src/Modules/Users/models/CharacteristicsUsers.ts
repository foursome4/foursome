import { v4 as uuidv4 } from "uuid";

class CharacteristicsUsers {
  id?: string;
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
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { CharacteristicsUsers };
