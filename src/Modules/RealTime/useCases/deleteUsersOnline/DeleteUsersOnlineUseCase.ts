import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";

class DeleteUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    ("");
  }

  async execute({id}){

   await this.UsersOnlineRepository.delete({id});
  }
}

export { DeleteUsersOnlineUseCase };
