import { PostsRepository } from "../../repositories/implementations/PlainsRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postsRepository = PostsRepository.getInstance();
const createPostUseCase = new CreatePostUseCase(postsRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostController };
