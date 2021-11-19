import { v4 as uuidv4 } from "uuid";

class Group {
  id?: string;
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Group };
