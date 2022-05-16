import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { CreatePlainsController } from "./CreatePlainsController";
import { CreatePlainsUseCase } from "./CreatePlainsUseCase";

const plainsRepository = PlainsRepository.getInstance();
const createPlainsUseCase = new CreatePlainsUseCase(plainsRepository);
const createPlainsController = new CreatePlainsController(createPlainsUseCase);

export { createPlainsController };
