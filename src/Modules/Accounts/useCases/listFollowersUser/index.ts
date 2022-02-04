import { FollowersRepository } from "../../repositories/implementations/FollowersRepository";
import { ListFollowersUserUseCase } from "./ListFollowersUserUseCase";
import { ListFollowersUserController } from "./ListFollowersUserController";

const followersRepository = FollowersRepository.getInstance();

const listFollowersUserUsecase = new ListFollowersUserUseCase(followersRepository);

const listFollowersUserController = new ListFollowersUserController(listFollowersUserUsecase);

export { listFollowersUserController };
