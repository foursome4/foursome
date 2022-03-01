import { IMembersRepository } from "../../repositories/IMembersRepository";
interface IRequest {
  idEvent: string;
  idAccount: string;
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

  execute({ idAccount, idEvent, role, status, avatar, username, nickname }: IRequest): void {
    this.iMembersRepository.findById(idAccount);


    this.iMembersRepository.create({
      idAccount, idEvent, role, status, avatar, username, nickname
    });
  }
}

export { CreateMembersUseCase };
