import { InformationsRepository } from "../../repositories/implementations/InformationsRepository";
import { UpdateInformationsController } from "./UpdateInformationsController";
import { UpdateInformationsUseCase } from "./UpdateInformationsUseCase";

const informationsRepository = InformationsRepository.getInstance();

const updateInformationsUseCase = new UpdateInformationsUseCase(informationsRepository);

const updateInformationsController = new UpdateInformationsController(updateInformationsUseCase);

export { updateInformationsController };
