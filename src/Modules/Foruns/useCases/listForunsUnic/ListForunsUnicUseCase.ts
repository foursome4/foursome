import { collections } from "../../../../../services/database.service";
import { Foruns } from "../../models/Foruns";
import { IForunsRepository } from "../../repositories/IForunsRepository";

class ListForunsUnicUseCase {
  constructor(private ForunsRepository: IForunsRepository) {
    " ";
  }

  async execute() {
   const foruns = await collections.foruns.find({});
   const forunsAll = foruns.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(forunsAll)
        }
  }

export { ListForunsUnicUseCase };
