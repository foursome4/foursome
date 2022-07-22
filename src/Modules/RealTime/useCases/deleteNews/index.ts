import { NewsRepository } from "../../repositories/implementations/NewsRepository";
import { DeleteNewsController } from "./DeleteNewsController";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";

const newsRepository = NewsRepository.getInstance();
const deleteNewsUseCase = new DeleteNewsUseCase(newsRepository);
const deleteNewsController = new DeleteNewsController(deleteNewsUseCase);

export { deleteNewsController };
