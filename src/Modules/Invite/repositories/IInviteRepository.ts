import { Invites } from "../models/Invites";

interface IInvitesDTO {
  idAccount: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  code: string;
}

interface IInvitesRepository {
  create({ code, idAccount, username, name, email, phone }: IInvitesDTO): Promise<void>;
  findByInvites(email: string): Promise<void> ;
  list();
  delete({id});
}

export { IInvitesRepository, IInvitesDTO };
