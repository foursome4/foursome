import { PaymentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { DeletePaymentsController } from "./DeletePaymentsController";
import { DeletePaymentsUseCase } from "./DeletePaymentsUseCase";

const paymentsRepository = PaymentsRepository.getInstance();
const deletePaymentsUseCase = new DeletePaymentsUseCase(paymentsRepository);
const deletePaymentsController = new DeletePaymentsController(deletePaymentsUseCase);

export { deletePaymentsController };
