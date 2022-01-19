import { FollowersRepository } from "../../repositories/implementations/FollowersRepository";
import { ListFollowersUseCase } from "./ListFollowersUseCase";
import { ListFollowersController } from "./ListGroupFollowers";

const followersRepository = FollowersRepository.getInstance();

const listFollowersUsecase = new ListFollowersUseCase(followersRepository);

const listFollowersController = new ListFollowersController(listFollowersUsecase);

export { listFollowersController };
