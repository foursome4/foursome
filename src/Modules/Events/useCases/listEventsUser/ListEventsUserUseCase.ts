import { collections } from "../../../../../services/database.service";
import { Events } from "../../models/Events";
import { IEventsRepository } from "../../repositories/IEventsRepository";

class ListEventsUserUseCase {
  constructor(private EventsUserRepository: IEventsRepository) {
    " ";
  }

  async execute() {
   const Events = await collections.events.find({});
   const EventsAll = Events.toArray(function(err, result){
    console.log(result)
    return result;
   })
console.log(EventsAll)
        }
  }

export { ListEventsUserUseCase };
