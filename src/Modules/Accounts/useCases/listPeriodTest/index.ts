import { PeriodTestRepository } from "../../repositories/implementations/PeriodTestRepository";
import { ListPeriodTestUseCase } from "./ListPeriodTestUseCase";
import { ListPeriodTestController } from "./ListPeriodTestController";

const periodTestRepository = PeriodTestRepository.getInstance();

const listPeriodTestUsecase = new ListPeriodTestUseCase(periodTestRepository);

const listPeriodTestController = new ListPeriodTestController(listPeriodTestUsecase);

export { listPeriodTestController };
