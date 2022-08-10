import { PlainsRepository } from "../../repositories/implementations/PlainsRepository";
import { ListPlainsUnicIdController } from "./ListPlainsUnicIdController";
import { ListPlainsUnicIdUseCase } from "./ListPlainsUnicIdUseCase";

const plainsRepository = PlainsRepository.getInstance();

const listPlainsUnicUsecase = new ListPlainsUnicIdUseCase(plainsRepository);

const listPlainsUnicIdController = new ListPlainsUnicIdController(listPlainsUnicUsecase);

export { listPlainsUnicIdController };
