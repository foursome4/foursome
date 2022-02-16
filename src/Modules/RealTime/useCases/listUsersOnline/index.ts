import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { ListUsersOnlineController } from "./ListUsersOnlineController";
import { ListUsersOnlineUseCase } from "./ListUsersOnlineUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();

const listUsersOnlineUsecase = new ListUsersOnlineUseCase(usersOnlineRepository);

const listUsersOnlineController = new ListUsersOnlineController(listUsersOnlineUsecase);

export { listUsersOnlineController };
