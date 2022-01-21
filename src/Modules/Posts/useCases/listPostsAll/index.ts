import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsAllController } from "./ListPostsAllController";
import { ListPostsAllUseCase } from "./ListPostsAllUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListPostsAllUseCase(postsRepository);

const listPostsAllController = new ListPostsAllController(listPostsUsecase);

export { listPostsAllController };
