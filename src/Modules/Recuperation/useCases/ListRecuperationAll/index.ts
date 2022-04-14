
import { ListRecuperationAllUseCase } from "./ListRecuperationAllUseCase";
import { ListRecuperationAllController } from "./ListRecuperationAllController";
import { RecuperationRepository } from "../../repositories/implementations/RecuperationRepository";

const recuperationRepository = RecuperationRepository.getInstance();

const listRecuperationAllUsecase = new ListRecuperationAllUseCase(recuperationRepository);

const listRecuperationAllController = new ListRecuperationAllController(listRecuperationAllUsecase);

export { listRecuperationAllController };
