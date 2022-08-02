import { DateReadMessageChatRepository } from "../../repositories/implementations/DateReadMessageChatRepository";
import { UpdateDateReadMessageChatController } from "./UpdateDateReadMessageChatController";
import { UpdateDateReadMessageChatUseCase } from "./UpdateDateReadMessageChatUseCase";

const dateReadMessageChatRepository = DateReadMessageChatRepository.getInstance();

const updateDateReadMessageChatUseCase = new UpdateDateReadMessageChatUseCase(dateReadMessageChatRepository);

const updateDateReadMessageChatController = new UpdateDateReadMessageChatController(updateDateReadMessageChatUseCase);

export { updateDateReadMessageChatController };
