import { RecuperationRepository } from "../../repositories/implementations/RecuperationRepository";
import { CreateRecuperationController } from "./CreateRecuperationController";
import { CreateRecuperationUseCase } from "./CreateRecuperationUseCase";

const recuperationRepository = RecuperationRepository.getInstance();

const createRecuperationUseCase = new CreateRecuperationUseCase(recuperationRepository);

const createRecuperationController = new CreateRecuperationController(createRecuperationUseCase);

export { createRecuperationController };
