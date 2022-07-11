import { hash } from "bcrypt";
import { IInvitesRepository } from "../../repositories/IInviteRepository";
import { Request, Response } from "express";

interface IRequest {
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

class UpdateInviteUseCase {
  constructor(private inviteRepository: IInvitesRepository) {
    " ";
  }
  
  async execute({code, idAccount, username, name, email, type, phone, active, resend }: IRequest): Promise<void> {

      await this.inviteRepository.update({
        code, idAccount, username, name, email, type, phone, active, resend
      });

  }
}

export { UpdateInviteUseCase };
