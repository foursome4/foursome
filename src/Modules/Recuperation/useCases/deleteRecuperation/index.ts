import { RecuperationRepository } from "../../repositories/implementations/RecuperationRepository";
import { DeleteRecuperationController } from "./DeleteRecuperationController";
import { DeleteRecuperationUseCase } from "./DeleteRecuperationUseCase";

const recuperationRepository = RecuperationRepository.getInstance();
const deleteRecuperationUseCase = new DeleteRecuperationUseCase(recuperationRepository);
const deleteRecuperationController = new DeleteRecuperationController(deleteRecuperationUseCase);

export { deleteRecuperationController };
