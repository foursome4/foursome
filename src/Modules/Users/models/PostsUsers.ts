import { v4 as uuidv4 } from "uuid";

class PostsUsers {
  id?: string;
  id_user: string;
  type: string;
  url: string; // guest, member
  text: string; // active, inactive, suspended, banned
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { PostsUsers };
