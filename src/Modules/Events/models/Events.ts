import { v4 as uuidv4 } from "uuid";

class Events {
  id?: string;
  id_user: string;
  title: string;
  description: string;
  address: string;
  hours: string;
  event_date: string;
  local: string;
  event_type: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Events };
