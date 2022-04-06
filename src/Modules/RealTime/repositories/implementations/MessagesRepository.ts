import { Messages } from "../../models/Messages";
import { IMessagesDTO, IMessagesRepository } from "../IMessagesRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class MessagesRepository implements IMessagesRepository {
  private messages: Messages[];

  private static INSTANCE: MessagesRepository;

  private constructor() {
    this.messages = [];
  }

  public static getInstance(): MessagesRepository {
    if (!MessagesRepository.INSTANCE) {
      MessagesRepository.INSTANCE = new MessagesRepository();
    }

    return MessagesRepository.INSTANCE;
  }

 async create({ 
  id, idRoom, idAccount, link, avatar, nickname, username, text, created_at
  }: IMessagesDTO) {
    const messages: Messages = new Messages();
    Object.assign(messages, {
      id, idRoom, idAccount, link, avatar, nickname, username, text, created_at
    });

    this.messages.push(messages);
    console.log(messages)

    await collections.message.insertOne(messages).then((result) => {
      console.log(result) 
    })
  }
  list(): Messages[] {
    return this.messages;
  }

  async delete({id}) {
    await collections.message.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}


export { MessagesRepository };
