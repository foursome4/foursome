import { collections } from "../../../../../services/database.service";
import { Accounts } from "../../../Accounts/models/Accounts";
import { IAccountsRepository } from "../../../Accounts/repositories/IAccountsRepository";

class ListAccountsUseCase {
  constructor(private AccountsRepository: IAccountsRepository) {
    " ";
  }

  async execute() {
   const accounts = await collections.accounts.find({});
   const accountsAll = accounts.toArray(function(err, result){
   // console.log(result)
    return result;
   })
console.log(accountsAll)
        }
  }

export { ListAccountsUseCase };
