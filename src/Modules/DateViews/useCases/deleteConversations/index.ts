import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { DeleteConversationsController } from "./DeleteConversationsController";
import { DeleteConversationsUseCase } from "./DeleteConversationsUseCase";

const conversationsRepository = ConversationsRepository.getInstance();
const deleteConversationsUseCase = new DeleteConversationsUseCase(conversationsRepository);
const deleteConversationsController = new DeleteConversationsController(deleteConversationsUseCase);

export { deleteConversationsController };
