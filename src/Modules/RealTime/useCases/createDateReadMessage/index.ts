import { DateReadMessageRepository } from "../../repositories/implementations/DateReadMessageRepository";
import { CreateDateReadMessageController } from "./CreateDateReadMessageController";
import { CreateDateReadMessageUseCase } from "./CreateDateReadMessageUseCase";

const dateReadMessageRepository = DateReadMessageRepository.getInstance();
const createDateReadMessageUseCase = new CreateDateReadMessageUseCase(dateReadMessageRepository);
const createDateReadMessageController = new CreateDateReadMessageController(createDateReadMessageUseCase);

export { createDateReadMessageController };
