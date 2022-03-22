import { NavigateUser } from "../models/NavigateUser";

interface INavigateUserDTO {
  navigator: string;
  idAccount: string;
  username: string;
}

interface INavigateUserRepository {
  create({ username, idAccount, navigator}: INavigateUserDTO): Promise<void>;
  list();
  delete({id});
}

export { INavigateUserRepository, INavigateUserDTO };
