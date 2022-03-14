import { DateRead } from "../../models/DateRead";
import { IDateReadDTO, IDateReadRepository } from "../IDateReadRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class DateReadRepository implements IDateReadRepository {
  private dateRead: DateRead[];

  private static INSTANCE: DateReadRepository;

  private constructor() {
    this.dateRead = [];
  }

  public static getInstance(): DateReadRepository {
    if (!DateReadRepository.INSTANCE) {
      DateReadRepository.INSTANCE = new DateReadRepository();
    }

    return DateReadRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.dateRead.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      }   
  }
 
  async create({
    DateRead
  }){}

  list(): DateRead[] {
    return this.dateRead;
  }

  async delete({id}) {
    await collections.dateRead.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  update({DateRead}):void {}
}


export { DateReadRepository };
