import { v4 as uuidv4 } from "uuid";

class Group {
  id?: string;
  name: string;
  description: string;
  created_at: Date;
  avatar: string;
  theme: string;
  privacity: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Group };
