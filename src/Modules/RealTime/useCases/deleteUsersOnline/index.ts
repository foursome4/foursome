import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { DeleteUsersOnlineController } from "./DeleteUsersOnlineController";
import { DeleteUsersOnlineUseCase } from "./DeleteUsersOnlineUseCase";

const usersOnlineRepository = UsersOnlineRepository.getInstance();
const deleteUsersOnlineUseCase = new DeleteUsersOnlineUseCase(usersOnlineRepository);
const deleteUsersOnlineController = new DeleteUsersOnlineController(deleteUsersOnlineUseCase);

export { deleteUsersOnlineController };
