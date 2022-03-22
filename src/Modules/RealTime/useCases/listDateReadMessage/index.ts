import { DateReadMessageRepository } from "../../repositories/implementations/DateReadMessageRepository";
import { ListDateReadMessageController } from "./ListDateReadMessageController";
import { ListDateReadMessageUseCase } from "./ListDateReadMessageUseCase";

const dateReadMessageRepository = DateReadMessageRepository.getInstance();

const listDateReadMessageUsecase = new ListDateReadMessageUseCase(dateReadMessageRepository);

const listDateReadMessageController = new ListDateReadMessageController(listDateReadMessageUsecase);

export { listDateReadMessageController };
