import { Accounts } from "../../models/Accounts";
import { IAccountsRepository, IAccountsDTO } from "../IAccountsRepository";
import { collections } from '../../../../../services/database.service';
import { v1 as uuidv4 } from "uuid";

class AccountsRepository implements IAccountsRepository {
  private accounts: Accounts[];

  private static INSTANCE: AccountsRepository;

  private constructor() {
    this.accounts = [];
  }

  public static getInstance(): AccountsRepository {
    if (!AccountsRepository.INSTANCE) {
      AccountsRepository.INSTANCE = new AccountsRepository();
    }

    return AccountsRepository.INSTANCE;
  }

  async findByEmail(email: string): Promise<void> {
    const findEmail = await collections.accounts.findOne({email})
      if(findEmail) {
        throw new Error("Email already exists!")
      } 
  }
  async findByUsername(username: string): Promise<void>  {
    const findUsername = await collections.accounts.findOne({username})
    if(findUsername) {
      throw new Error("Username already exists!")
    } 
  }

  async create({
    username, role, status, type, email, phone, password, online, patron
  }){}

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }

  list(){ }

  update({username, role, status, type, email, phone, password, online, patron}):void {}

  async delete({id}) {
    await collections.accounts.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { AccountsRepository };




