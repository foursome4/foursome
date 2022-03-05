import { NotificationsRepository } from "../../repositories/implementations/NotificationsRepository";
import { DeleteNotificationsController } from "./DeleteNotificationsController";
import { DeleteNotificationsUseCase } from "./DeleteNotificationsUseCase";

const notificationsRepository = NotificationsRepository.getInstance();
const deleteNotificationsUseCase = new DeleteNotificationsUseCase(notificationsRepository);
const deleteNotificationsController = new DeleteNotificationsController(deleteNotificationsUseCase);

export { deleteNotificationsController };
