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
s

  async create({id, país, username, role, status, type, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation }: IAccountsDTO) {
    const account: Accounts = new Accounts();
     
      Object.assign(account, {
        id, _id: id, país, username, role, status, type, email, phone, online, patron, password, nickname, avatar, cover, relationship, city, uf, cep, latitude, longitude, recommendation ,created_at: new Date(),
      });
      this.accounts.push(account);
      
      await collections.accounts.insertOne(account).then((result) => {
        //console.log(result)
      }).catch(error => {
        console.log(error)
      })
        }

  async session(email: string, username: string, password: string){
    return {
      email,
      username,
      password
    }
  }
  async sessionFast(id: string){
    return {
     id
    }
  }

  list(){ }

  update({país, username, role, status, type, email, phone, online, patron, nickname, avatar, cover, relationship, city, uf, password, cep, latitude, longitude, recommendation}):void {}

  async delete({id}) {
    await collections.accounts.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }


}

export { AccountsRepository };




