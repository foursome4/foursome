import { IMembersRepository } from "../../repositories/IMembersRepository";

class DeleteMemberUseCase {
  constructor(private commentsRepository: IMembersRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteMemberUseCase };
