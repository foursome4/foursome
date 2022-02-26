import { collections } from "../../../../../services/database.service";
import { Group } from "../../models/Group";
import { IGroupsRepository } from "../../repositories/IGroupsRepository";

class ListGroupUnicUseCase {
  constructor(private groupsRepository: IGroupsRepository) {
    " ";
  }

  async execute() {
   const groups = await collections.groups.find({});
   const groupsAll = groups.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(groupsAll)
        }
  }

export { ListGroupUnicUseCase };
