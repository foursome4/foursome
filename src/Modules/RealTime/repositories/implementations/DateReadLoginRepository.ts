import { DateReadLogin } from "../../models/DateReadLogin";
import { IDateReadLoginDTO, IDateReadLoginRepository } from "../IDateReadLoginRepository";
import {v4 as uuidv4} from 'uuid'
import { collections } from "../../../../../services/database.service";

class DateReadLoginRepository implements IDateReadLoginRepository {
  private dateReadLogin: DateReadLogin[];

  private static INSTANCE: DateReadLoginRepository;

  private constructor() {
    this.dateReadLogin = [];
  }

  public static getInstance(): DateReadLoginRepository {
    if (!DateReadLoginRepository.INSTANCE) {
      DateReadLoginRepository.INSTANCE = new DateReadLoginRepository();
    }

    return DateReadLoginRepository.INSTANCE;
  }

  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.dateReadLogin.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      }   
  }
 
  async create({
    DateReadLogin
  }){}

  list(): DateReadLogin[] {
    return this.dateReadLogin;
  }

  async delete({id}) {
    await collections.dateReadLogin.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  update({DateReadLogin}):void {}
}


export { DateReadLoginRepository };
