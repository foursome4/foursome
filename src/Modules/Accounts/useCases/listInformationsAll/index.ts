import { InformationsRepository } from "../../repositories/implementations/InformationsRepository";
import { ListInformationsAllUseCase } from "./ListInformationsAllUseCase";
import { ListInformationsAllController } from "./ListInformationsAllController";

const informationsRepository = InformationsRepository.getInstance();

const listInformationsAllUsecase = new ListInformationsAllUseCase(informationsRepository);

const listInformationsAllController = new ListInformationsAllController(listInformationsAllUsecase);

export { listInformationsAllController };
