import { PaymentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { CreatePaymentsController } from "./CreatePaymentsController";
import { CreatePaymentsUseCase } from "./CreatePaymentsUseCase";

const paymentsRepository = PaymentsRepository.getInstance();
const createPaymentsUseCase = new CreatePaymentsUseCase(paymentsRepository);
const createPaymentsController = new CreatePaymentsController(createPaymentsUseCase);

export { createPaymentsController };
