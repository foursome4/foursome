import { IReplyRepository } from "../../repositories/IReplyRepository";

class DeleteReplyUseCase {
  constructor(private ReplyRepository: IReplyRepository) {
    ("");
  }

  async execute({id}){

   await this.ReplyRepository.delete({id});
  }
}

export { DeleteReplyUseCase };
