import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { DeleteMessagesRoomController } from "./DeleteMessagesRoomController";
import { DeleteMessagesRoomUseCase } from "./DeleteMessagesRoomUseCase";

const messagesRepository = MessagesRepository.getInstance();
const deleteMessagesUseCase = new DeleteMessagesRoomUseCase(messagesRepository);
const deleteMessagesRoomController = new DeleteMessagesRoomController(deleteMessagesUseCase);

export { deleteMessagesRoomController };
