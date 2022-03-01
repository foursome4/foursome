import { collections } from "../../../../../services/database.service";
import { Members } from "../../models/Members";
import { IMembersRepository } from "../../repositories/IMembersRepository";

class ListMembersEventUseCase {
  constructor(private MembersRepository: IMembersRepository) {
    " ";
  }

  async execute() {
   const Members = await collections.membersEvent.find({});
   const MembersAll = Members.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(MembersAll)
        }
  }

export { ListMembersEventUseCase };
