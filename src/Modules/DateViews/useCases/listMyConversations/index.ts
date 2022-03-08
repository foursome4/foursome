import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { ListMyConversationsController } from "./ListMyConversationsController";
import { ListMyConversationsUseCase } from "./ListMyConversationsUseCase";

const conversationsRepository = ConversationsRepository.getInstance();

const listMyConversationsUsecase = new ListMyConversationsUseCase(conversationsRepository);

const listMyConversationsController = new ListMyConversationsController(listMyConversationsUsecase);

export { listMyConversationsController };
