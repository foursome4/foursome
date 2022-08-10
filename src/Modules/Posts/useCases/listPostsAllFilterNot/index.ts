import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostsAllFilterNotController } from "./ListPostsAllFilterNotController";
import { ListPostsAllFilterNotUseCase } from "./ListPostsAllFilterNotUseCase";

const postsRepository = PostsRepository.getInstance();

const listPostsUsecase = new ListPostsAllFilterNotUseCase(postsRepository);

const listPostsAllFilterNotController = new ListPostsAllFilterNotController(listPostsUsecase);

export { listPostsAllFilterNotController };
