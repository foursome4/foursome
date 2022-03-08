import { NotificationsRepository } from "../../repositories/implementations/NotificationsRepository";
import { CreateNotificationsController } from "./CreateNotificationsController";
import { CreateNotificationsUseCase } from "./CreateNotificationsUseCase";

const notificationsRepository = NotificationsRepository.getInstance();
const createNotificationsUseCase = new CreateNotificationsUseCase(notificationsRepository);
const createNotificationsController = new CreateNotificationsController(createNotificationsUseCase);

export { createNotificationsController };
