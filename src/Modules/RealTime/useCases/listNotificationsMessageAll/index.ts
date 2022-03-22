import { NotificationsMessageRepository } from "../../repositories/implementations/NotificationsMessageRepository";
import { ListNotificationsMessageAllController } from "./ListNotificationsMessageAllController";
import { ListNotificationsMessageAllUseCase } from "./ListNotificationsMessageAllUseCase";

const notificationsMessageRepository = NotificationsMessageRepository.getInstance();

const listNotificationsMessageAllUsecase = new ListNotificationsMessageAllUseCase(notificationsMessageRepository);

const listNotificationsMessageAllController = new ListNotificationsMessageAllController(listNotificationsMessageAllUsecase);

export { listNotificationsMessageAllController };
