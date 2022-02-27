import { Events } from "../models/Events";

interface ICreateEventsDTO {
  name: string;
  description: string;
  avatar: string;
  cover: string;
  theme: string;
  privacity: string;
  date: string;
  status: string;
  street: string;
  number: string;
  district: string;
  city: string;
  uf: string;
  complement: string;
  reference: string;
}

interface IEventsRepository {
  create({
    name,
    description,
    avatar,
    cover,
    theme,
    privacity,
    date,
    status,
    street,
    number,
    district,
    city,
    uf,
    complement,
    reference
  }: ICreateEventsDTO): void;
  findByName(name: string): Events;
  list();
}

export { IEventsRepository, ICreateEventsDTO };
