import { LikePostRepository } from "../../repositories/implementations/LikePostRepository";
import { CreateLikePostController } from "./CreateLikePostController";
import { CreateLikePostUseCase } from "./CreateLikePostUseCase";

const likePostRepository = LikePostRepository.getInstance();

const createLikePostUseCase = new CreateLikePostUseCase(likePostRepository);

const createLikePostController = new CreateLikePostController(createLikePostUseCase);

export { createLikePostController };
