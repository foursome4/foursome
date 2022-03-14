import { collections } from "../../../../../services/database.service";
import { DateRead } from "../../models/DateRead";
import { IDateReadRepository } from "../../repositories/IDateReadRepository";

class ListDateReadUseCase {
  constructor(private DateReadsRepository: IDateReadRepository) {
    " ";
  }

  async execute() {
   const post = await collections.dateRead.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListDateReadUseCase };
