import { Invites } from "../models/Invites";

interface IInvitesDTO {
  idAccount: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  code: string;
  type: string;
  active: boolean;
  resend: boolean;
}

interface IInvitesRepository {
  create({ code, idAccount, username, name, email, phone, type, active, resend }: IInvitesDTO): Promise<void>;
  update({ code, idAccount, username, name, email, phone, type, active, resend }: IInvitesDTO): Promise<void>;
  findByInvites(email: string): Promise<void> ;
  list();
  delete({id});
}

export { IInvitesRepository, IInvitesDTO };
