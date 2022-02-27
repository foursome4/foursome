import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { ListEventsUnicController } from "./ListEventsUnicController";
import { ListEventsUnicUseCase } from "./ListEventsUnicUseCase";

const eventsRepository = EventsRepository.getInstance();

const listEventsUnicUsecase = new ListEventsUnicUseCase(eventsRepository);

const listEventsUnicController = new ListEventsUnicController(listEventsUnicUsecase);

export { listEventsUnicController };
