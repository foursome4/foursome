
import { InformationsRepository } from "../../repositories/implementations/InformationsRepository";
import { DeleteInformationsController } from "./DeleteInformationsController";
import { DeleteInformationsUseCase } from "./DeleteInformationsUseCase";

const postsRepository = InformationsRepository.getInstance();
const deleteInformationsUseCase = new DeleteInformationsUseCase(postsRepository);
const deleteInformationsController = new DeleteInformationsController(deleteInformationsUseCase);

export { deleteInformationsController };
