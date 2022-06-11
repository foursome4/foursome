import { collections } from "../../../../../services/database.service";
import { DateReadFeed } from "../../models/DateReadFeed";
import { IDateReadFeedRepository } from "../../repositories/IDateReadFeedRepository";

class ListDateReadFeedUseCase {
  constructor(private DateReadFeedsRepository: IDateReadFeedRepository) {
    " ";
  }

  async execute() {
   const post = await collections.dateReadFeed.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListDateReadFeedUseCase };
