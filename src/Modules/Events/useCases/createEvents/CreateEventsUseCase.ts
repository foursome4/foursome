import { IEventsRepository } from "../../repositories/IEventsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  status: string;
  date: Date;
  street: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  complement: string;
  reference: string;
  idAccount: string;
  username: string;
  avatarUser: string;
  nickname: string;
  featured: Boolean;
}

class CreateEventsUseCase {
  constructor(private EventsRepository: IEventsRepository) {
    " ";
  }

  execute({ name,
    description,
    avatar,
    cover,
    theme,
    status,
    date,
    street,
    number,
    district,
    city,
    uf,
    complement,
    reference,
    idAccount,
    username,
    avatarUser,
    nickname,
    featured
    , }: IRequest): void {
    this.EventsRepository.findByName(name);


    this.EventsRepository.create({
      name,
      description,
      avatar,
      cover,
      theme,
      status,
      date,
      street,
      number,
      district,
      city,
      uf,
      complement,
      reference,
      idAccount,
      username,
      avatarUser,
      nickname,
      featured
    });
  }
}

export { CreateEventsUseCase };
