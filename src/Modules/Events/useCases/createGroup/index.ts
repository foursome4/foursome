import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { CreateEventsController } from "./CreateEventsController";
import { CreateEventsUseCase } from "./CreateEventsUseCase";

const eventsRepository = EventsRepository.getInstance();

const createEventsUseCase = new CreateEventsUseCase(eventsRepository);

const createEventsController = new CreateEventsController(createEventsUseCase);

export { createEventsController };
