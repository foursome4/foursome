import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { ListPlainsController } from "./ListPlainsController";
import { ListPlainsUseCase } from "./ListPlainsUseCase";

const plainsRepository = PlainsRepository.getInstance();

const listPlainsUsecase = new ListPlainsUseCase(plainsRepository);

const listPlainsController = new ListPlainsController(listPlainsUsecase);

export { listPlainsController };
