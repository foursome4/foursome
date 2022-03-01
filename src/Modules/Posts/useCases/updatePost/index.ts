import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { UpdatePostsController } from "./UpdatePostsController";
import { UpdatePostsUseCase } from "./UpdatePostsUseCase";

const postsRepository = PostsRepository.getInstance();

const updatePostsUseCase = new UpdatePostsUseCase(postsRepository);

const updatePostsController = new UpdatePostsController(updatePostsUseCase);

export { updatePostsController };
