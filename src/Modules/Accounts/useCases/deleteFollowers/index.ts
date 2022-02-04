
import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { DeleteFollowersController } from "./DeleteFollowersController";
import { DeleteFollowersUseCase } from "./DeleteFollowersUseCase";

const postsRepository = FriendsRepository.getInstance();
const deleteFollowersUseCase = new DeleteFollowersUseCase(postsRepository);
const deleteFollowersController = new DeleteFollowersController(deleteFollowersUseCase);

export { deleteFollowersController };
