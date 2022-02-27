import { IEventsRepository } from "../../repositories/IEventsRepository";

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

class CreateEventsUseCase {
  constructor(private EventsRepository: IEventsRepository) {
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
    this.EventsRepository.findByName(name);


    this.EventsRepository.create({
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

export { CreateEventsUseCase };
