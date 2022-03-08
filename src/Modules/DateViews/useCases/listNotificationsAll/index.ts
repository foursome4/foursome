import { NotificationsRepository } from "../../repositories/implementations/NotificationsRepository";
import { ListNotificationsAllController } from "./ListNotificationsAllController";
import { ListNotificationsAllUseCase } from "./ListNotificationsAllUseCase";

const notificationsRepository = NotificationsRepository.getInstance();

const listNotificationsAllUsecase = new ListNotificationsAllUseCase(notificationsRepository);

const listNotificationsAllController = new ListNotificationsAllController(listNotificationsAllUsecase);

export { listNotificationsAllController };
