import { Invites } from "../models/Invites";

interface IInvitesDTO {
  idAccount: string;
  name: string;
  email: string;
  phone: string;
  inviteCode: string;
}

interface IInvitesRepository {
  create({ inviteCode, idAccount, name, email, phone }: IInvitesDTO): Promise<void>;
  findByInvites(email: string): Promise<void> ;
  list(): Invites[];
}

export { IInvitesRepository, IInvitesDTO };
