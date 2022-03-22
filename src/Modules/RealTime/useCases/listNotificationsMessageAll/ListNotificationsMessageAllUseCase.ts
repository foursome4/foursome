import { collections } from "../../../../../services/database.service";
import { NotificationsMessage } from "../../models/NotificationsMessage";
import { INotificationsMessageRepository } from "../../repositories/INotificationsMessageRepository";

class ListNotificationsMessageAllUseCase {
  constructor(private NotificationsMessageAllsRepository: INotificationsMessageRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.notificationsMessage.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListNotificationsMessageAllUseCase };
