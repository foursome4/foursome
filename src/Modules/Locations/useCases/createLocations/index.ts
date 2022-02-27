import { LocationsRepository } from "../../repositories/implementations/LocationsRepository";
import { CreateLocationsController } from "./CreateLocationsController";
import { CreateLocationsUseCase } from "./CreateLocationsUseCase";

const locationsRepository = LocationsRepository.getInstance();

const createLocationsUseCase = new CreateLocationsUseCase(locationsRepository);

const createLocationsController = new CreateLocationsController(createLocationsUseCase);

export { createLocationsController };
