import { DateReadFeed } from "../../models/DateReadFeed";
import { IDateReadFeedDTO, IDateReadFeedRepository } from "../IDateReadFeedRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class DateReadFeedRepository implements IDateReadFeedRepository {
  private dateReadFeed: DateReadFeed[];

  private static INSTANCE: DateReadFeedRepository;

  private constructor() {
    this.dateReadFeed = [];
  }

  public static getInstance(): DateReadFeedRepository {
    if (!DateReadFeedRepository.INSTANCE) {
      DateReadFeedRepository.INSTANCE = new DateReadFeedRepository();
    }

    return DateReadFeedRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.dateReadFeed.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      }   
  }
 
  async create({
    DateReadFeed
  }){}

  list(): DateReadFeed[] {
    return this.dateReadFeed;
  }

  async delete({id}) {
    await collections.dateReadFeed.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  update({DateReadFeed}):void {}
}


export { DateReadFeedRepository };
