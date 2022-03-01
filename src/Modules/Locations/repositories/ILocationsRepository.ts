import { Locations } from "../models/Locations";

interface ICreateLocationsDTO {
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

interface ILocationsRepository {
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
  }: ICreateLocationsDTO): void;
  update({
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
  }: ICreateLocationsDTO): void;
  findByName(name: string): Locations;
  list();
  delete({id});
}

export { ILocationsRepository, ICreateLocationsDTO };
