import { Notifications } from "../../models/Notifications";
import { INotificationsDTO, INotificationsRepository } from "../INotificationsRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notifications[];

  private static INSTANCE: NotificationsRepository;

  private constructor() {
    this.notifications = [];
  }

  public static getInstance(): NotificationsRepository {
    if (!NotificationsRepository.INSTANCE) {
      NotificationsRepository.INSTANCE = new NotificationsRepository();
    }

    return NotificationsRepository.INSTANCE;
  }

  async findById(id: string): Promise<void>  {
    const findid = await collections.notifications.findOne({id})
    
        if(findid) {
          throw new Error("User already exists!")
        } 
    }
 
 async create({ 
  idAccount, idPatrono, idFriend, type,text, idPost, 
  }: INotificationsDTO) {
    const notifications: Notifications = new Notifications();
    const _id = uuidv4()
    Object.assign(notifications, {
      _id,
      id: _id,
      idAccount, idPatrono, idFriend, type, text, idPost,
      created_at: new Date(),
    });

    this.notifications.push(notifications);
    console.log(notifications)

    await collections.notifications.insertOne(notifications).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }
  list(): Notifications[] {
    return this.notifications;
  }

  async delete({id}) {
    await collections.notifications.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NotificationsRepository };
