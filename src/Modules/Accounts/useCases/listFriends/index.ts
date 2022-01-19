import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { ListFriendsUseCase } from "./ListFriendsUseCase";
import { ListFriendsController } from "./ListGroupFriends";

const friendsRepository = FriendsRepository.getInstance();

const listFriendsUsecase = new ListFriendsUseCase(friendsRepository);

const listFriendsController = new ListFriendsController(listFriendsUsecase);

export { listFriendsController };
