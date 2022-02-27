import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostForunsController } from "./ListPostForunsController";
import { ListPostForunsUseCase } from "./ListPostForunsUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostForunsUsecase = new ListPostForunsUseCase(postsRepository);

const listPostForunsController = new ListPostForunsController(listPostForunsUsecase);

export { listPostForunsController };
