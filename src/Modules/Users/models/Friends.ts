import { v4 as uuidv4 } from "uuid";

class FriendsUsers {
  id?: string;
  id_friend: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { FriendsUsers };
