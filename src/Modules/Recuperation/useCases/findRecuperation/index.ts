
import { FindRecuperationUseCase } from "./FindRecuperationUseCase";
import { FindRecuperationController } from "./FindRecuperationController";
import { RecuperationRepository } from "../../repositories/implementations/RecuperationRepository";

const recuperationRepository = RecuperationRepository.getInstance();

const findRecuperationUsecase = new FindRecuperationUseCase(recuperationRepository);

const findRecuperationController = new FindRecuperationController(findRecuperationUsecase);

export { findRecuperationController };
