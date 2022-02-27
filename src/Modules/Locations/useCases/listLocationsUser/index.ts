import { LocationsRepository } from "../../repositories/implementations/LocationsRepository";
import { ListLocationsUserController } from "./ListLocationsUserController";
import { ListLocationsUserUseCase } from "./ListLocationsUserUseCase";

const locationsRepository = LocationsRepository.getInstance();

const listLocationsUserUsecase = new ListLocationsUserUseCase(locationsRepository);

const listLocationsUserController = new ListLocationsUserController(listLocationsUserUsecase);

export { listLocationsUserController };
