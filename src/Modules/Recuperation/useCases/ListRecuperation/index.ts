
import { ListRecuperationUseCase } from "./ListRecuperationUseCase";
import { ListRecuperationController } from "./ListRecuperationController";
import { RecuperationRepository } from "../../repositories/implementations/RecuperationRepository";

const recuperationRepository = RecuperationRepository.getInstance();

const listRecuperationUsecase = new ListRecuperationUseCase(recuperationRepository);

const listRecuperationController = new ListRecuperationController(listRecuperationUsecase);

export { listRecuperationController };
