import { InformationsRepository } from "../../repositories/implementations/InformationsRepository";
import { ListInformationsUseCase } from "./ListInformationsUseCase";
import { ListInformationsController } from "./ListInformationsController";

const informationsRepository = InformationsRepository.getInstance();

const listInformationsUsecase = new ListInformationsUseCase(informationsRepository);

const listInformationsController = new ListInformationsController(listInformationsUsecase);

export { listInformationsController };
