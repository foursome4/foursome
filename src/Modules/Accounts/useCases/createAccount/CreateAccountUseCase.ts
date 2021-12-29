import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IRequest {
  nickname: string;
  username: string;
  role: string;
  type: string;
  email: string;
  phone: string;
  password: string;
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountsRepository) {
    " ";
  }

  execute({nickname, username, role, type, email, phone, password  }: IRequest): void {
    this.accountRepository.findByEmail(email);


    this.accountRepository.create({
      nickname, username, role, type, email, phone, password,
    });
  }
}

export { CreateAccountUseCase };
