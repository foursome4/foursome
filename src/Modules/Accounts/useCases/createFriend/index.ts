import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { CreateFriendsController } from "./CreateFriendsController";
import { CreateFriendsUseCase } from "./CreateFriendstUseCase";

const friendsRepository = FriendsRepository.getInstance();

const createFriendsUseCase = new CreateFriendsUseCase(friendsRepository);

const createFriendsController = new CreateFriendsController(createFriendsUseCase);

export { createFriendsController };
