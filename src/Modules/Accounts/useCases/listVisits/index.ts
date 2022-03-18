import { VisitsRepository } from "../../repositories/implementations/VisitsRepository";
import { ListVisitsUseCase } from "./ListVisitsUseCase";
import { ListVisitsController } from "./ListVisitsController";

const visitsRepository = VisitsRepository.getInstance();

const listVisitsUsecase = new ListVisitsUseCase(visitsRepository);

const listVisitsController = new ListVisitsController(listVisitsUsecase);

export { listVisitsController };
