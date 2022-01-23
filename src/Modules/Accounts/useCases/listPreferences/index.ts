import { PreferencesRepository } from "../../repositories/implementations/PreferencesRepository";
import { ListPreferencesUseCase } from "./ListPreferencesUseCase";
import { ListPreferencesController } from "./ListPreferencesController";

const preferencesRepository = PreferencesRepository.getInstance();

const listPreferencesUsecase = new ListPreferencesUseCase(preferencesRepository);

const listPreferencesController = new ListPreferencesController(listPreferencesUsecase);

export { listPreferencesController };
