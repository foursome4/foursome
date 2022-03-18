import { DateReadMessage } from "../../models/DateReadMessage";
import { IDateReadMessageDTO, IDateReadMessageRepository } from "../IDateReadMessageRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class DateReadMessageRepository implements IDateReadMessageRepository {
  private dateReadMessage: DateReadMessage[];

  private static INSTANCE: DateReadMessageRepository;

  private constructor() {
    this.dateReadMessage = [];
  }

  public static getInstance(): DateReadMessageRepository {
    if (!DateReadMessageRepository.INSTANCE) {
      DateReadMessageRepository.INSTANCE = new DateReadMessageRepository();
    }

    return DateReadMessageRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.dateReadMessage.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      }   
  }
 
  async create({
    DateReadMessage
  }){}

  list(): DateReadMessage[] {
    return this.dateReadMessage;
  }

  async delete({id}) {
    await collections.dateReadMessage.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  update({DateReadMessage}):void {}
}


export { DateReadMessageRepository };
