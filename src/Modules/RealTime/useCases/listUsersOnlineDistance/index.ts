import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { ListUsersOnlineDistanceController } from "./ListUsersOnlineDistanceController";
import { ListUsersOnlineDistanceUseCase } from "./ListUsersOnlineDistanceUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();

const listUsersOnlineDistanceUsecase = new ListUsersOnlineDistanceUseCase(usersOnlineRepository);

const listUsersOnlineDistanceController = new ListUsersOnlineDistanceController(listUsersOnlineDistanceUsecase);

export { listUsersOnlineDistanceController };
