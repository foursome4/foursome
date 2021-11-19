import { v4 as uuidv4 } from "uuid";

class CommentsForuns {
  id?: string;
  text: string;
  id_post: string;
  id_user: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { CommentsForuns };
