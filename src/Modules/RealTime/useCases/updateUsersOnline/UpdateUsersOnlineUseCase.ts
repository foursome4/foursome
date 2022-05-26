import { hash } from "bcrypt";
import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";
import { Request, Response } from "express";

interface IRequest {
  idAccount: string;
  username: string;
  type: string;
  nickname: string;
  avatar: string;
  relationship: string;
  lat: string;
  long: string;
  city: string;
  uf: string;
  actualCity: string;
  actualUf: string;
  equalCity: boolean;
  plane: boolean;
  emoji: string;
  song: boolean;
  invisible: boolean;
}

class UpdateUsersOnlineUseCase {
  constructor(private UsersOnlineRepository: IUsersOnlineRepository) {
    " ";
  }
  
  async execute({idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible }: IRequest): Promise<void> {

      await this.UsersOnlineRepository.update({
        idAccount, username, type, nickname, avatar, relationship, lat, long, city, uf, actualCity, actualUf, equalCity, plane, emoji, song, invisible
      });

  }
}

export { UpdateUsersOnlineUseCase };
