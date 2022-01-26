import { IInvitesRepository } from "../../repositories/IInviteRepository";


interface IRequest {
  idAccount: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  inviteCode: string;
}

class CreateInvitesUseCase {
  constructor(private invitesRepository: IInvitesRepository) {
    " ";
  }
  
  async execute({inviteCode, idAccount, username, name, email, phone }: IRequest): Promise<void> {
    const findEmail = await this.invitesRepository.findByInvites(email);

      await this.invitesRepository.create({
        inviteCode, idAccount, username, name, email, phone
      });

  }
}

export { CreateInvitesUseCase };
