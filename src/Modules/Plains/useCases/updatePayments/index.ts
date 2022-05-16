import { PaymentsRepository } from "../../repositories/implementations/PaymentsRepository";
import { UpdatePaymentsController } from "./UpdatePaymentsController";
import { UpdatePaymentsUseCase } from "./UpdatePaymentsUseCase";

const paymentsRepository = PaymentsRepository.getInstance();

const updatePaymentsUseCase = new UpdatePaymentsUseCase(paymentsRepository);

const updatePaymentsController = new UpdatePaymentsController(updatePaymentsUseCase);

export { updatePaymentsController };
