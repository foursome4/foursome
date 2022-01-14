import { FollowersRepository } from "../../repositories/implementations/FollowersRepository";
import { CreateFollowersController } from "./CreateFollowersController";
import { CreateFollowersUseCase } from "./CreateFollowerstUseCase";

const followersRepository = FollowersRepository.getInstance();

const createFollowersUseCase = new CreateFollowersUseCase(followersRepository);

const createFollowersController = new CreateFollowersController(createFollowersUseCase);

export { createFollowersController };
