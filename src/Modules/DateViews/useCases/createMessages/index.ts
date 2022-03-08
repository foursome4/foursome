import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { CreateMessagesController } from "./CreateMessagesController";
import { CreateMessagesUseCase } from "./CreateMessagesUseCase";

const messagesRepository = MessagesRepository.getInstance();
const createMessagesUseCase = new CreateMessagesUseCase(messagesRepository);
const createMessagesController = new CreateMessagesController(createMessagesUseCase);

export { createMessagesController };
