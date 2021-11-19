import { v4 as uuidv4 } from "uuid";

class Foruns {
  id?: string;
  name: string;
  description: string;
  theme: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Foruns };
