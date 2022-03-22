import { NavigateUserRepository } from "../../repositories/implementations/NavigateUserRepository";
import { ListNavigateUserUnicUseCase } from "./ListNavigateUserUnicUseCase";
import { ListNavigateUserUnicController } from "./ListNavigateUserUnicController";

const navigateUserRepository = NavigateUserRepository.getInstance();

const listNavigateUserUnicUsecase = new ListNavigateUserUnicUseCase(navigateUserRepository);

const listNavigateUserUnicController = new ListNavigateUserUnicController(listNavigateUserUnicUsecase);

export { listNavigateUserUnicController };
