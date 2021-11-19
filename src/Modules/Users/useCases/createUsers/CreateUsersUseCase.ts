import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  username: string;
  nickname: string;
  role: string; // guest, member
  status: string; // active, inactive, suspended, banned
  plan: string;
  active_plan: string;
  birth_date: string;
  email: string;
  phone: string;
  uf: string;
  city: string;
  sexual_orientation: string;
  search: string;
  sign: string;
  password: string;
}

class CreateUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    ("");
  }

  execute({
    username,
    nickname,
    role,
    status,
    plan,
    active_plan,
    birth_date,
    email,
    phone,
    uf,
    city,
    sexual_orientation,
    search,
    sign,
    password,
  }: IRequest): void {
    const membersGroupAlreadyExists =
      this.usersRepository.findByUsername(username);

    if (membersGroupAlreadyExists) {
      throw new Error("Member of Group Already Exists! ");
    }
    this.usersRepository.create({
      username,
      nickname,
      role,
      status,
      plan,
      active_plan,
      birth_date,
      email,
      phone,
      uf,
      city,
      sexual_orientation,
      search,
      sign,
      password,
    });
  }
}

export { CreateUsersUseCase };
