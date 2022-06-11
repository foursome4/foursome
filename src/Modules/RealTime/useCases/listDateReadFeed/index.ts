import { DateReadFeedRepository } from "../../repositories/implementations/DateReadFeedRepository";
import { ListDateReadFeedController } from "./ListDateReadFeedController";
import { ListDateReadFeedUseCase } from "./ListDateReadFeedUseCase";

const dateReadFeedRepository = DateReadFeedRepository.getInstance();

const listDateReadFeedUsecase = new ListDateReadFeedUseCase(dateReadFeedRepository);

const listDateReadFeedController = new ListDateReadFeedController(listDateReadFeedUsecase);

export { listDateReadFeedController };
