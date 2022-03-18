import { NotificationsMessageRepository } from "../../repositories/implementations/NotificationsMessageRepository";
import { CreateNotificationsMessageController } from "./CreateNotificationsMessageController";
import { CreateNotificationsMessageUseCase } from "./CreateNotificationsMessageUseCase";

const notificationsMessageRepository = NotificationsMessageRepository.getInstance();
const createNotificationsMessageUseCase = new CreateNotificationsMessageUseCase(notificationsMessageRepository);
const createNotificationsMessageController = new CreateNotificationsMessageController(createNotificationsMessageUseCase);

export { createNotificationsMessageController };
