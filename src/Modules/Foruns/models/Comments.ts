import { v4 as uuidv4 } from "uuid";

class Comments {
  id?: string;
  text: string;
  id_post: string;
  id_user: string;
  username: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Comments };
