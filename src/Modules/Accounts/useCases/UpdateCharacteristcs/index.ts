import { CharacteristicsRepository } from "../../repositories/implementations/CharacteristicsRepository";
import { UpdateCharacteristcsController } from "./UpdateCharacteristcsController";
import { UpdateCharacteristcsUseCase } from "./UpdateCharacteristcsUseCase";

const characteristicsRepository = CharacteristicsRepository.getInstance();

const updateCharacteristcsUseCase = new UpdateCharacteristcsUseCase(characteristicsRepository);

const updateCharacteristcsController = new UpdateCharacteristcsController(updateCharacteristcsUseCase)

export { updateCharacteristcsController };
