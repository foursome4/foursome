import { v4 as uuidv4 } from "uuid";

class Posts {
  id?: string;
  text: string;
  image: string;
  movie: string;
  category: string;
  id_group: string;
  id_member: string;
  username: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Posts };
