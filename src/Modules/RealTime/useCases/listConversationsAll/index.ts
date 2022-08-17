import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { ListConversationsAllController } from "./ListConversationsAllController";
import { ListConversationsAllUseCase } from "./ListConversationsAllUseCase";

const conversationsRepository = ConversationsRepository.getInstance();

const listConversationsUsecase = new ListConversationsAllUseCase(conversationsRepository);

const listConversationsAllController = new ListConversationsAllController(listConversationsUsecase);

export { listConversationsAllController };
