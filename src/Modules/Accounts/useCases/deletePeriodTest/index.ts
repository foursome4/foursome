
import { PeriodTestRepository } from "../../repositories/implementations/PeriodTestRepository";
import { DeletePeriodTestController } from "./DeletePeriodTestController";
import { DeletePeriodTestUseCase } from "./DeletePeriodTestUseCase";

const postsRepository = PeriodTestRepository.getInstance();
const deletePeriodTestUseCase = new DeletePeriodTestUseCase(postsRepository);
const deletePeriodTestController = new DeletePeriodTestController(deletePeriodTestUseCase);

export { deletePeriodTestController };
