
import { VisitsRepository } from "../../repositories/implementations/VisitsRepository";
import { CreateVisitsController } from "./CreateVisitsController";
import { CreateVisitsUseCase } from "./CreateVisitsUseCase";

const visitsRepository = VisitsRepository.getInstance();

const createVisitsUseCase = new CreateVisitsUseCase(visitsRepository);

const createVisitsController = new CreateVisitsController(createVisitsUseCase);

export { createVisitsController };
