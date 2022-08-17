import { collections } from "../../../../../services/database.service";
import { Conversations } from "../../models/Conversations";
import { IConversationsRepository } from "../../repositories/IConversationsRepository";

class ListConversationsAllUseCase {
  constructor(private ConversationssRepository: IConversationsRepository) {
    " ";
  }

  async execute() {
    
   const Conversations = await collections.conversations.find({});
   const ConversationsAll = Conversations.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ConversationsAll)
        }
  }

export { ListConversationsAllUseCase };
