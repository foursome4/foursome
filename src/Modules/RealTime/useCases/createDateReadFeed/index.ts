import { DateReadFeedRepository } from "../../repositories/implementations/DateReadFeedRepository";
import { CreateDateReadFeedController } from "./CreateDateReadFeedController";
import { CreateDateReadFeedUseCase } from "./CreateDateReadFeedUseCase";

const dateReadFeedRepository = DateReadFeedRepository.getInstance();
const createDateReadFeedUseCase = new CreateDateReadFeedUseCase(dateReadFeedRepository);
const createDateReadFeedController = new CreateDateReadFeedController(createDateReadFeedUseCase);

export { createDateReadFeedController };
