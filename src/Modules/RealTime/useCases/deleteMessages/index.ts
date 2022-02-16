import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { DeleteMessagesController } from "./DeleteMessagesController";
import { DeleteMessagesUseCase } from "./DeleteMessagesUseCase";

const messagesRepository = MessagesRepository.getInstance();
const deleteMessagesUseCase = new DeleteMessagesUseCase(messagesRepository);
const deleteMessagesController = new DeleteMessagesController(deleteMessagesUseCase);

export { deleteMessagesController };
