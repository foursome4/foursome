import { INewsReplyRepository } from "../../repositories/INewsReplyRepository";

class DeleteNewsReplyUseCase {
  constructor(private NewsReplyRepository: INewsReplyRepository) {
    ("");
  }

  async execute({id}){

   await this.NewsReplyRepository.delete({id});
  }
}

export { DeleteNewsReplyUseCase };
