import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { ListUsersOnlineOneController } from "./listUsersOnlineOneController";
import { ListUsersOnlineOneUseCase } from "./listUsersOnlineOneUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();

const listUsersOnlineOneUsecase = new ListUsersOnlineOneUseCase(usersOnlineRepository);

const listUsersOnlineOneController = new ListUsersOnlineOneController(listUsersOnlineOneUsecase);

export { listUsersOnlineOneController };
