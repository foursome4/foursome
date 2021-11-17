import { Users } from "../../models/Users";
import { IUsersDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: Users[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({
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
  }: IUsersDTO): void {
    const user: Users = new Users();
    Object.assign(user, {
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
      created_at: new Date(),
    });

    this.users.push(user);
  }
  findByUsername(username: string): Users {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
  list(): Users[] {
    return this.users;
  }
}

export { UsersRepository };
