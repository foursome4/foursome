import { CharacteristicsRepository } from "../../repositories/implementations/CharacteristicsRepository";
import { ListCharacteristicsUseCase } from "./ListCharacteristicsUseCase";
import { ListCharacteristicsController } from "./ListCharacteristicsController";

const characteristicsRepository = CharacteristicsRepository.getInstance();

const listCharacteristicsUsecase = new ListCharacteristicsUseCase(characteristicsRepository);

const listCharacteristicsController = new ListCharacteristicsController(listCharacteristicsUsecase);

export { listCharacteristicsController };
