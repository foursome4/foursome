import { NotificationsMessage } from "../../models/NotificationsMessage";
import { INotificationsMessageDTO, INotificationsMessageRepository } from "../INotificationsMessageRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class NotificationsMessageRepository implements INotificationsMessageRepository {
  private notificationsMessage: NotificationsMessage[];

  private static INSTANCE: NotificationsMessageRepository;

  private constructor() {
    this.notificationsMessage = [];
  }

  public static getInstance(): NotificationsMessageRepository {
    if (!NotificationsMessageRepository.INSTANCE) {
      NotificationsMessageRepository.INSTANCE = new NotificationsMessageRepository();
    }

    return NotificationsMessageRepository.INSTANCE;
  }

  async findById(id: string): Promise<void>  {
    const findid = await collections.notificationsMessage.findOne({id})
    
        if(findid) {
          throw new Error("User already exists!")
        } 
    }
 
 async create({ 
  idAccount, idFriend, text, 
  }: INotificationsMessageDTO) {
    const notificationsMessage: NotificationsMessage = new NotificationsMessage();
    const _id = uuidv4()
    Object.assign(notificationsMessage, {
      _id,
      id: _id,
      idAccount, idFriend,  text,
      created_at: new Date(),
    });

    this.notificationsMessage.push(notificationsMessage);
    console.log(notificationsMessage)

    await collections.notificationsMessage.insertOne(notificationsMessage).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }
  list(): NotificationsMessage[] {
    return this.notificationsMessage;
  }

  async delete({id}) {
    await collections.notificationsMessage.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { NotificationsMessageRepository };
