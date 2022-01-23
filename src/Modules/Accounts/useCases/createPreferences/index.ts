import { PreferencesRepository } from "../../repositories/implementations/PreferencesRepository";
import { CreatePreferencesController } from "./CreatePreferencesController";
import { CreatePreferencesUseCase } from "./CreatePreferencesUseCase";

const preferencesRepository = PreferencesRepository.getInstance();

const createPreferencesUseCase = new CreatePreferencesUseCase(preferencesRepository);

const createPreferencesController = new CreatePreferencesController(createPreferencesUseCase);

export { createPreferencesController };


