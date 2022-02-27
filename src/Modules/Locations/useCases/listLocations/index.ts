import { LocationsRepository } from "../../repositories/implementations/LocationsRepository";
import { ListLocationsController } from "./ListLocationsController";
import { ListLocationsUseCase } from "./ListLocationsUseCase";

const locationsRepository = LocationsRepository.getInstance();

const listLocationsUsecase = new ListLocationsUseCase(locationsRepository);

const listLocationsController = new ListLocationsController(listLocationsUsecase);

export { listLocationsController };
