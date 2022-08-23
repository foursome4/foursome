import { PeriodTestRepository } from "../../repositories/implementations/PeriodTestRepository";
import { UpdatePeriodTestController } from "./UpdatePeriodTestController";
import { UpdatePeriodTestUseCase } from "./UpdatePeriodTestUseCase";

const periodTestRepository = PeriodTestRepository.getInstance();

const updatePeriodTestUseCase = new UpdatePeriodTestUseCase(periodTestRepository);

const updatePeriodTestController = new UpdatePeriodTestController(updatePeriodTestUseCase);

export { updatePeriodTestController };
