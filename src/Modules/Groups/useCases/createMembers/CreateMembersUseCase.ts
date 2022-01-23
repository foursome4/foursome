import { IMembersRepository } from "../../repositories/IMembersRepository";
interface IRequest {
  id_group: string;
  id_account: string;
  avatar: string;
  username: string;
  nickname:string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
}

class CreateMembersUseCase {
  constructor(private iMembersRepository: IMembersRepository) {
    " ";
  }

  execute({ id_account, id_group, role, status, avatar, username, nickname }: IRequest): void {
    this.iMembersRepository.findById(id_account);


    this.iMembersRepository.create({
      id_account, id_group, role, status, avatar, username, nickname
    });
  }
}

export { CreateMembersUseCase };
