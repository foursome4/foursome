import { hash } from "bcrypt";
import { IInvitesRepository } from "../../repositories/IInviteRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  name: string;
  email: string;
  phone: string;
  inviteCode: string;
}

class CreateInvitesUseCase {
  constructor(private invitesRepository: IInvitesRepository) {
    " ";
  }
  
  async execute({inviteCode, idAccount, name, email, phone }: IRequest): Promise<void> {
    const findEmail = await this.invitesRepository.findByInvites(email);

      await this.invitesRepository.create({
        inviteCode, idAccount, name, email, phone
      });

  }
}

export { CreateInvitesUseCase };
