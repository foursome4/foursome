import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { ListConversationsController } from "./ListConversationsController";
import { ListConversationsUseCase } from "./ListConversationsUseCase";

const conversationsRepository = ConversationsRepository.getInstance();

const listConversationsUsecase = new ListConversationsUseCase(conversationsRepository);

const listConversationsController = new ListConversationsController(listConversationsUsecase);

export { listConversationsController };
