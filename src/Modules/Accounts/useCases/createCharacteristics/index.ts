import { CharacteristicsRepository } from "../../repositories/implementations/CharacteristicsRepository";
import { CreateCharacteristicsController } from "./CreateCharacteristicsController";
import { CreateCharacteristicsUseCase } from "./CreateCharacteristicsUseCase";

const characteristicsRepository = CharacteristicsRepository.getInstance();

const createCharacteristicsUseCase = new CreateCharacteristicsUseCase(characteristicsRepository);

const createCharacteristicsController = new CreateCharacteristicsController(createCharacteristicsUseCase);

export { createCharacteristicsController };


