import { collections } from "../../../../../services/database.service";
import { Notifications } from "../../models/Notifications";
import { INotificationsRepository } from "../../repositories/INotificationsRepository";

class ListNotificationsOneUseCase {
  constructor(private NotificationssRepository: INotificationsRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.notifications.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListNotificationsOneUseCase };
