import { InformationsRepository } from "../../repositories/implementations/InformationsRepository";
import { CreateInformationsController } from "./CreateInformationsController";
import { CreateInformationsUseCase } from "./CreateInformationsUseCase";

const informationsRepository = InformationsRepository.getInstance();

const createInformationsUseCase = new CreateInformationsUseCase(informationsRepository);

const createInformationsController = new CreateInformationsController(createInformationsUseCase);

export { createInformationsController };
