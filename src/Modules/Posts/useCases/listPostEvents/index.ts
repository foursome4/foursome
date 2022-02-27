import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostEventsController } from "./ListPostEventsController";
import { ListPostEventsUseCase } from "./ListPostEventsUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostEventsUsecase = new ListPostEventsUseCase(postsRepository);

const listPostEventsController = new ListPostEventsController(listPostEventsUsecase);

export { listPostEventsController };
