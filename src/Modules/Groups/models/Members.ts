import { v4 as uuidv4 } from "uuid";

class Members {
  id?: string;
  id_user: string;
  role: string;
  status: string;
  id_group: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Members };
