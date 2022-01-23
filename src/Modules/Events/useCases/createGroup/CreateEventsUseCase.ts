import { IEventsRepository } from "../../repositories/IEventsRepository";

interface IRequest {
  name: string;
  description: string;
  avatar: string;
  theme: string;
  privacity: string;
  date: string;
  status: string;
  address: string;
}

class CreateEventsUseCase {
  constructor(private EventsRepository: IEventsRepository) {
    " ";
  }

  execute({   name,
    description,
    avatar,
    theme,
    privacity,
    date,
    status,
    address, }: IRequest): void {
    this.EventsRepository.findByName(name);


    this.EventsRepository.create({
      name,
      description,
      avatar,
      theme,
      privacity,
      date,
      status,
      address,
    });
  }
}

export { CreateEventsUseCase };
