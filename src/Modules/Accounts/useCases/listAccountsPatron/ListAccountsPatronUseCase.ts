import { collections } from "../../../../../services/database.service";
import { Accounts } from "../../models/Accounts";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

class ListAccountsPatronUseCase {
  constructor(private AccountsRepository: IAccountsRepository) {
    " ";
  }

  async execute() {
   const accounts = await collections.accounts.find({});
   const accountsAll = accounts.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(accountsAll)
        }
  }

export { ListAccountsPatronUseCase };
