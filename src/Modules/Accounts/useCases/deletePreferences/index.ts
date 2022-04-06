
import { PreferencesRepository } from "../../repositories/implementations/PreferencesRepository";
import { DeletePreferencesController } from "./DeletePreferencesController";
import { DeletePreferencesUseCase } from "./DeletePreferencesUseCase";

const postsRepository = PreferencesRepository.getInstance();
const deletePreferencesUseCase = new DeletePreferencesUseCase(postsRepository);
const deletePreferencesController = new DeletePreferencesController(deletePreferencesUseCase);

export { deletePreferencesController };
