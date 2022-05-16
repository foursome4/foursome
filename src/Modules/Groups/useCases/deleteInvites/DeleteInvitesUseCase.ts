import { IInvitesRepository } from "../../repositories/IInviteRepository";

class DeleteInvitesUseCase {
  constructor(private commentsRepository: IInvitesRepository) {
    ("");
  }

  async execute({id}){

   await this.commentsRepository.delete({id});
  }
}

export { DeleteInvitesUseCase };
