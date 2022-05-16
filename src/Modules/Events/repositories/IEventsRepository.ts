import { Events } from "../models/Events";

interface ICreateEventsDTO {
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

interface IEventsRepository {
  create({
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
  }: ICreateEventsDTO): void;
  findByName(name: string): Events;
  list();
  delete({id});
  update({
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
  }: ICreateEventsDTO): void;
}

export { IEventsRepository, ICreateEventsDTO };
