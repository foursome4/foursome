import { ILocationsRepository } from "../../repositories/ILocationsRepository";

interface IRequest {
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

class CreateLocationsUseCase {
  constructor(private LocationsRepository: ILocationsRepository) {
    " ";
  }

  execute({   name,
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
    reference, }: IRequest): void {
    this.LocationsRepository.findByName(name);


    this.LocationsRepository.create({
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
    reference,
    });
  }
}

export { CreateLocationsUseCase };
