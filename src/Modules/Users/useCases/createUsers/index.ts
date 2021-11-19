import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUsersController } from "./CreateUsersController";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const createUsersUseCase = new CreateUsersUseCase(usersRepository);
const createUsersController = new CreateUsersController(createUsersUseCase);

export { createUsersController };
