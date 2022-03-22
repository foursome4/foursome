import { collections } from "../../../../../services/database.service";
import { IInvitesRepository } from "../../repositories/IInviteRepository";

class ListInvitesAllUseCase {
  constructor(private InvitesRepository: IInvitesRepository) {
    " ";
  }

  async execute() {
   const accounts = await collections.invites.find({});
   const accountsAll = accounts.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(accountsAll)
        }
  }

export { ListInvitesAllUseCase };
