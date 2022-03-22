import { NavigateUserRepository } from "../../repositories/implementations/NavigateUserRepository";
import { CreateNavigateUserController } from "./CreateNavigateController";
import { CreateNavigateUserUseCase } from "./CreateNavigateUseCase";

const navigateUserRepository = NavigateUserRepository.getInstance();

const createNavigateUserUseCase = new CreateNavigateUserUseCase(navigateUserRepository);

const createNavigateUserController = new CreateNavigateUserController(createNavigateUserUseCase);

export { createNavigateUserController };
