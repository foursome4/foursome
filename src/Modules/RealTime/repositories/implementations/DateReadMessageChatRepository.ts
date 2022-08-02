import { DateReadMessageChat } from "../../models/DateReadMessageChat";
import { IDateReadMessageChatDTO, IDateReadMessageChatRepository } from "../IDateReadMessageChatRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class DateReadMessageChatRepository implements IDateReadMessageChatRepository {
  private dateReadMessageChat: DateReadMessageChat[];

  private static INSTANCE: DateReadMessageChatRepository;

  private constructor() {
    this.dateReadMessageChat = [];
  }

  public static getInstance(): DateReadMessageChatRepository {
    if (!DateReadMessageChatRepository.INSTANCE) {
      DateReadMessageChatRepository.INSTANCE = new DateReadMessageChatRepository();
    }

    return DateReadMessageChatRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.dateReadMessageChat.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      }   
  }
 
  async create({
    DateReadMessageChat
  }){}

  list(): DateReadMessageChat[] {
    return this.dateReadMessageChat;
  }

  async delete({id}) {
    await collections.dateReadMessageChat.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  update({DateReadMessageChat}):void {}
}


export { DateReadMessageChatRepository };
