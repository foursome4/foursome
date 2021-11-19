import { v4 as uuidv4 } from "uuid";

class PostsForuns {
  id?: string;
  text: string;
  id_forum: string;
  id_user: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { PostsForuns };
