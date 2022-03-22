import { collections } from "../../../../../services/database.service";
import { DateReadMessage } from "../../models/DateReadMessage";
import { IDateReadMessageRepository } from "../../repositories/IDateReadMessageRepository";

class ListDateReadMessageUseCase {
  constructor(private DateReadMessagesRepository: IDateReadMessageRepository) {
    " ";
  }

  async execute() {
   const post = await collections.dateReadMessage.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListDateReadMessageUseCase };
