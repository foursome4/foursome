import { Events } from "../models/Events";

interface ICreateEventsDTO {
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
  date: string;
  status: string;
  address: string;
}

interface IEventsRepository {
  create({
    name,
    description,
    avatar,
    theme,
    privacity,
    date,
    status,
    address,
  }: ICreateEventsDTO): void;
  findByName(name: string): Events;
  list();
}

export { IEventsRepository, ICreateEventsDTO };
