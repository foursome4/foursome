import { LocationsRepository } from "../../repositories/implementations/LocationsRepository";
import { ListLocationsUnicController } from "./ListLocationsUnicController";
import { ListLocationsUnicUseCase } from "./ListLocationsUnicUseCase";

const locationsRepository = LocationsRepository.getInstance();

const listLocationsUnicUsecase = new ListLocationsUnicUseCase(locationsRepository);

const listLocationsUnicController = new ListLocationsUnicController(listLocationsUnicUsecase);

export { listLocationsUnicController };
