import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { CreateUsersOnlineController } from "./CreateUsersOnlineController";
import { CreateUsersOnlineUseCase } from "./CreateUsersOnlineUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();
const createUsersOnlineUseCase = new CreateUsersOnlineUseCase(usersOnlineRepository);
const createUsersOnlineController = new CreateUsersOnlineController(createUsersOnlineUseCase);

export { createUsersOnlineController };
