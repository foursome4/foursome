import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { ListEventsController } from "./ListEventsController";
import { ListEventsUseCase } from "./ListEventsUseCase";

const eventsRepository = EventsRepository.getInstance();

const listEventsUsecase = new ListEventsUseCase(eventsRepository);

const listEventsController = new ListEventsController(listEventsUsecase);

export { listEventsController };
