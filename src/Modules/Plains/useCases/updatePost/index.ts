import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { UpdatePlainsController } from "./UpdatePlainsController";
import { UpdatePlainsUseCase } from "./UpdatePlainsUseCase";

const plainsRepository = PlainsRepository.getInstance();

const updatePlainsUseCase = new UpdatePlainsUseCase(plainsRepository);

const updatePlainsController = new UpdatePlainsController(updatePlainsUseCase);

export { updatePlainsController };
