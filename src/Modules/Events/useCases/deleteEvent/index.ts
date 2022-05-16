import { EventsRepository } from "../../repositories/implementations/EventsRepository";
import { DeleteEventsController } from "./DeleteEventsController";
import { DeleteEventsUseCase } from "./DeleteEventsUseCase";

const eventsRepository = EventsRepository.getInstance();
const deleteEventsUseCase = new DeleteEventsUseCase(eventsRepository);
const deleteEventsController = new DeleteEventsController(deleteEventsUseCase);

export { deleteEventsController };
