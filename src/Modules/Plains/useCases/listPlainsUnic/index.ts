import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { ListPlainsUnicController } from "./ListPlainsUnicController";
import { ListPlainsUnicUseCase } from "./ListPlainsUnicUseCase";

const plainsRepository = PlainsRepository.getInstance();

const listPlainsUnicUsecase = new ListPlainsUnicUseCase(plainsRepository);

const listPlainsUnicController = new ListPlainsUnicController(listPlainsUnicUsecase);

export { listPlainsUnicController };
