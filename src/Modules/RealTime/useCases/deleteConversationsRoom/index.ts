import { ConversationsRepository } from "../../repositories/implementations/ConversationsRepository";
import { DeleteConversationsRoomController } from "./DeleteConversationsRoomController";
import { DeleteConversationsRoomUseCase } from "./DeleteConversationsRoomUseCase";

const conversationsRepository = ConversationsRepository.getInstance();
const deleteConversationsUseCase = new DeleteConversationsRoomUseCase(conversationsRepository);
const deleteConversationsRoomController = new DeleteConversationsRoomController(deleteConversationsUseCase);

export { deleteConversationsRoomController };
