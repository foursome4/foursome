import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { ListUsersOnlineOneController } from "./listUsersOnlineOneController";
import { ListUsersOnlineOneUseCase } from "./listUsersOnlineOneUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();

const listUsersOnlineUsecase = new ListUsersOnlineOneUseCase(usersOnlineRepository);

const listUsersOnlineController = new ListUsersOnlineOneController(listUsersOnlineUsecase);

export { listUsersOnlineController };
