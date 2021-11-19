import { v4 as uuidv4 } from "uuid";

class Posts {
  id?: string;
  text: string;
  link: string;
  category: string;
  id_group: string;
  id_user: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Posts };
