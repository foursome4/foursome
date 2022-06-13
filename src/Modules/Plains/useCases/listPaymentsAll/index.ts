import { PaymentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { ListPaymentsAllController } from "./ListPaymentsAllController";
import { ListPaymentsAllUseCase } from "./ListPaymentsAllUseCase";

const paymentsRepository = PaymentsRepository.getInstance();

const listPaymentsAllUsecase = new ListPaymentsAllUseCase(paymentsRepository);

const listPaymentsAllController = new ListPaymentsAllController(listPaymentsAllUsecase);

export { listPaymentsAllController };
