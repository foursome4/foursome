import { NotificationsMessageRepository } from "../../repositories/implementations/NotificationsMessageRepository";
import { ListNotificationsMessageOneController } from "./listUsersNotificationsMessageController";
import { ListNotificationsMessageOneUseCase } from "./listUsersNotificationsMessageUseCase";

const notificationsMessageRepository = NotificationsMessageRepository.getInstance();

const listNotificationsMessageUsecase = new ListNotificationsMessageOneUseCase(notificationsMessageRepository);

const listNotificationsMessageController = new ListNotificationsMessageOneController(listNotificationsMessageUsecase);

export { listNotificationsMessageController };
