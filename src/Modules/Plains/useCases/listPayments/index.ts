import { PaymentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { ListPaymentsController } from "./ListPaymentsController";
import { ListPaymentsUseCase } from "./ListPaymentsUseCase";

const paymentsRepository = PaymentsRepository.getInstance();

const listPaymentsUsecase = new ListPaymentsUseCase(paymentsRepository);

const listPaymentsController = new ListPaymentsController(listPaymentsUsecase);

export { listPaymentsController };
