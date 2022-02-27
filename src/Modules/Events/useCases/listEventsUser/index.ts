import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { ListEventsUserController } from "./ListEventsUserController";
import { ListEventsUserUseCase } from "./ListEventsUserUseCase";

const eventsRepository = EventsRepository.getInstance();

const listEventsUserUsecase = new ListEventsUserUseCase(eventsRepository);

const listEventsUserController = new ListEventsUserController(listEventsUserUsecase);

export { listEventsUserController };
