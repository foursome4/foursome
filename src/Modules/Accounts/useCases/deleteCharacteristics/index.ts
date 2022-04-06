
import { CharacteristicsRepository } from "../../repositories/implementations/CharacteristicsRepository";
import { DeleteCharacteristicsController } from "./DeleteCharacteristicsController";
import { DeleteCharacteristicsUseCase } from "./DeleteCharacteristicsUseCase";

const postsRepository = CharacteristicsRepository.getInstance();
const deleteCharacteristicsUseCase = new DeleteCharacteristicsUseCase(postsRepository);
const deleteCharacteristicsController = new DeleteCharacteristicsController(deleteCharacteristicsUseCase);

export { deleteCharacteristicsController };
