import { FriendsRepository } from "../../repositories/implementations/FriendsRepository";
import { ListFriendsUnicUseCase } from "./ListFriendsUnicUseCase";
import { ListFriendsUnicController } from "./ListFriendsUnicController";

const friendsRepository = FriendsRepository.getInstance();

const listFriendsUnicUsecase = new ListFriendsUnicUseCase(friendsRepository);

const listFriendsUnicController = new ListFriendsUnicController(listFriendsUnicUsecase);

export { listFriendsUnicController };
