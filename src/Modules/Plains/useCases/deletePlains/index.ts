import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { DeletePlainsController } from "./DeletePlainsController";
import { DeletePlainsUseCase } from "./DeletePlainsUseCase";

const plainsRepository = PlainsRepository.getInstance();
const deletePlainsUseCase = new DeletePlainsUseCase(plainsRepository);
const deletePlainsController = new DeletePlainsController(deletePlainsUseCase);

export { deletePlainsController };
