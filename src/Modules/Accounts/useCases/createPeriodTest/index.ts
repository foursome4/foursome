
import { PeriodTestRepository } from "../../repositories/implementations/PeriodTestRepository";
import { CreatePeriodTestController } from "./CreatePeriodTestController";
import { CreatePeriodTestUseCase } from "./CreatePeriodTestUseCase";

const periodTestRepository = PeriodTestRepository.getInstance();

const createPeriodTestUseCase = new CreatePeriodTestUseCase(periodTestRepository);

const createPeriodTestController = new CreatePeriodTestController(createPeriodTestUseCase);

export { createPeriodTestController };
