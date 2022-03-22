import { NavigateUserRepository } from "../../../NavigateUser/repositories/implementations/NavigateUserRepository";
import { ListNavigateUserUseCase } from "./ListNavigateUseCase";
import { ListNavigateUserController } from "./ListNavigateController";

const navigateUserRepository = NavigateUserRepository.getInstance();

const listNavigateUserUsecase = new ListNavigateUserUseCase(navigateUserRepository);

const listNavigateUserController = new ListNavigateUserController(listNavigateUserUsecase);

export { listNavigateUserController };
