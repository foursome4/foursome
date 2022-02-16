import { MessagesRepository } from "../../repositories/implementations/MessagesRepository";
import { ListMessagesController } from "./ListMessagesController";
import { ListMessagesUseCase } from "./ListMessagesUseCase";

const messagesRepository = MessagesRepository.getInstance();

const listMessagesUsecase = new ListMessagesUseCase(messagesRepository);

const listMessagesController = new ListMessagesController(listMessagesUsecase);

export { listMessagesController };
