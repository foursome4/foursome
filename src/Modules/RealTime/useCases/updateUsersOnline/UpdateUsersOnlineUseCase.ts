import { hash } from "bcrypt";
import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: string;
  long: string;
  equalCity: boolean;
  plane: boolean;
  emoji: boolean;
  song: boolean;
}

class UpdateUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    " ";
  }
  
  async execute({idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song }: IRequest): Promise<void> {

      await this.UsersOnlineRepository.update({
        idAccount, username, nickname, avatar, lat, long, equalCity, plane, emoji, song
      });

  }
}

export { UpdateUsersOnlineUseCase };
