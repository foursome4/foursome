import { DateReadMessageChatRepository } from "../../repositories/implementations/DateReadMessageChatRepository";
import { ListDateReadMessageChatController } from "./ListDateReadMessageChatController";
import { ListDateReadMessageChatUseCase } from "./ListDateReadMessageChatUseCase";

const dateReadMessageChatRepository = DateReadMessageChatRepository.getInstance();

const listDateReadMessageChatUsecase = new ListDateReadMessageChatUseCase(dateReadMessageChatRepository);

const listDateReadMessageChatController = new ListDateReadMessageChatController(listDateReadMessageChatUsecase);

export { listDateReadMessageChatController };
