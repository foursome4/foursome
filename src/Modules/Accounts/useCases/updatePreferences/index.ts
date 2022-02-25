import { PreferencesRepository } from "../../repositories/implementations/PreferencesRepository";
import { UpdatePreferencesController } from "./UpdatePreferencesController";
import { UpdatePreferencesUseCase } from "./UpdatePreferencesUseCase";

const preferencesRepository = PreferencesRepository.getInstance();

const updatePreferencesUseCase = new UpdatePreferencesUseCase(preferencesRepository);

const updatePreferencesController = new UpdatePreferencesController(updatePreferencesUseCase);

export { updatePreferencesController };
