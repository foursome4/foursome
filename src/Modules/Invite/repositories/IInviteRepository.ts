import { Invites } from "../models/Invites";

interface IInvitesDTO {
  idAccount: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  inviteCode: string;
}

interface IInvitesRepository {
  create({ inviteCode, idAccount, username, name, email, phone }: IInvitesDTO): Promise<void>;
  findByInvites(email: string): Promise<void> ;
  list(): Invites[];
}

export { IInvitesRepository, IInvitesDTO };
