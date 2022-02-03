
import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { DeleteFriendController } from "./DeleteFriendController";
import { DeleteFriendUseCase } from "./DeleteFriendUseCase";

const postsRepository = FriendsRepository.getInstance();
const deleteFriendUseCase = new DeleteFriendUseCase(postsRepository);
const deleteFriendController = new DeleteFriendController(deleteFriendUseCase);

export { deleteFriendController };
