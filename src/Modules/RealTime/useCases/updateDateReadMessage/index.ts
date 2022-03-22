import { DateReadMessageRepository } from "../../repositories/implementations/DateReadMessageRepository";
import { UpdateDateReadMessageController } from "./UpdateDateReadMessageController";
import { UpdateDateReadMessageUseCase } from "./UpdateDateReadMessageUseCase";

const dateReadMessageRepository = DateReadMessageRepository.getInstance();

const updateDateReadMessageUseCase = new UpdateDateReadMessageUseCase(dateReadMessageRepository);

const updateDateReadMessageController = new UpdateDateReadMessageController(updateDateReadMessageUseCase);

export { updateDateReadMessageController };
