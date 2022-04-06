import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { UpdateLikeController } from "./UpdateLikeController";
import { UpdateLikeUseCase } from "./UpdateLikeUseCase";

const LikRepository = PostsRepository.getInstance();

const updateLikeUseCase = new UpdateLikeUseCase(LikRepository);

const updateLikController = new UpdateLikeController(updateLikeUseCase);

export { updateLikController };
