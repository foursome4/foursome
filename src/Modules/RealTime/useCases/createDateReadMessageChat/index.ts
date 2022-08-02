import { DateReadMessageChatRepository } from "../../repositories/implementations/DateReadMessageChatRepository";
import { CreateDateReadMessageChatController } from "./CreateDateReadMessageChatController";
import { CreateDateReadMessageChatUseCase } from "./CreateDateReadMessageChatUseCase";

const dateReadMessageChatRepository = DateReadMessageChatRepository.getInstance();
const createDateReadMessageChatUseCase = new CreateDateReadMessageChatUseCase(dateReadMessageChatRepository);
const createDateReadMessageChatController = new CreateDateReadMessageChatController(createDateReadMessageChatUseCase);

export { createDateReadMessageChatController };
