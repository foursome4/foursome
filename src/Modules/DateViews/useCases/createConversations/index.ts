import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { CreateConversationsController } from "./CreateConversationsController";
import { CreateConversationsUseCase } from "./CreateConversationsUseCase";

const conversationsRepository = ConversationsRepository.getInstance();
const createConversationsUseCase = new CreateConversationsUseCase(conversationsRepository);
const createConversationsController = new CreateConversationsController(createConversationsUseCase);

export { createConversationsController };
