import { collections } from "../../../../../services/database.service";
import { Conversations } from "../../models/Conversations";
import { IConversationsRepository } from "../../repositories/IConversationsRepository";

class ListMyConversations2UseCase {
  constructor(private Conversations2sRepository: IConversationsRepository) {
    " ";
  }

  async execute() {
    
   const Conversations2 = await collections.conversations.find({});
   const Conversations2All = Conversations2.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(Conversations2All)
        }
  }

export { ListMyConversations2UseCase };
