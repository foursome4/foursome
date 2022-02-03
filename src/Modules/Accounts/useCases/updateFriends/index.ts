import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { UpdateFriendsController } from "./UpdateFriendsController";
import { UpdateFriendsUseCase } from "./UpdateFriendsUseCase";

const friendsRepository = FriendsRepository.getInstance();

const updateFriendsUseCase = new UpdateFriendsUseCase(friendsRepository);

const updateFriendsController = new UpdateFriendsController(updateFriendsUseCase);

export { updateFriendsController };