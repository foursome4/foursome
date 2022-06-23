import { NotificationsRepository } from "../../repositories/implementations/NotificationsRepository";
import { ListNotificationsController } from "./ListNotificationsController";
import { ListNotificationsUseCase } from "./ListNotificationsUseCase";

const notificationsRepository = NotificationsRepository.getInstance();

const listNotificationsUsecase = new ListNotificationsUseCase(notificationsRepository);

const listNotifications2Controller = new ListNotificationsController(listNotificationsUsecase);

export { listNotifications2Controller };
