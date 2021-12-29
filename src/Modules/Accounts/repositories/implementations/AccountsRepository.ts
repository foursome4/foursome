import { Accounts } from "../../models/Accounts";
import { IAccountsRepository, IAccountsDTO } from "../IAccountsRepository";
import { collections } from '../../../../../services/database.service'

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

  
  
  findByEmail(email: string): Accounts {
    const account = this.accounts.find((account) => account.email === email);
    
    try {
      const findEmail = collections.accounts.findOne({email});

      if(findEmail ) {
        return
      }
    } catch {

    }

    return account;
  }

    async create({ nickname, username, role, type, email, phone, password }: IAccountsDTO) {
      const account: Accounts = new Accounts();
      Object.assign(account, {
        nickname, username, email, role, type, phone, password,created_at: new Date(),
      });
  
      this.accounts.push(account);
      console.log(account)
    await collections.accounts.insertOne(account).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
    }
    
  

  list(): Accounts[] {
    return this.accounts;
  }
}

export { AccountsRepository };
