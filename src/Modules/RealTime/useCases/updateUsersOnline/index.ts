import { UsersOnlineRepository } from "../../repositories/implementations/UsersOnlineRepository";
import { UpdateUsersOnlineController } from "./UpdateUsersOnlineController";
import { UpdateUsersOnlineUseCase } from "./UpdateUsersOnlineUseCase";

const UsersOnlinesRepository = UsersOnlineRepository.getInstance();

const updateUsersOnlineUseCase = new UpdateUsersOnlineUseCase(UsersOnlinesRepository);

const updateUsersOnlineController = new UpdateUsersOnlineController(updateUsersOnlineUseCase);

export { updateUsersOnlineController };
