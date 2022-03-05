import { NotificationsRepository } from "../../repositories/implementations/NotificationsRepository";
import { ListNotificationsOneController } from "./listUsersNotificationsController";
import { ListNotificationsOneUseCase } from "./listUsersNotificationsUseCase";

const notificationsRepository = NotificationsRepository.getInstance();

const listNotificationsUsecase = new ListNotificationsOneUseCase(notificationsRepository);

const listNotificationsController = new ListNotificationsOneController(listNotificationsUsecase);

export { listNotificationsController };
