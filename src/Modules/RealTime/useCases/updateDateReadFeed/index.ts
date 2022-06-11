import { DateReadFeedRepository } from "../../repositories/implementations/DateReadFeedRepository";
import { UpdateDateReadFeedController } from "./UpdateDateReadFeedController";
import { UpdateDateReadFeedUseCase } from "./UpdateDateReadFeedUseCase";

const dateReadFeedRepository = DateReadFeedRepository.getInstance();

const updateDateReadFeedUseCase = new UpdateDateReadFeedUseCase(dateReadFeedRepository);

const updateDateReadFeedController = new UpdateDateReadFeedController(updateDateReadFeedUseCase);

export { updateDateReadFeedController };
