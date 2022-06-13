import { Plains } from "../models/Plains";

interface IPlainsDTO {
  name: string;
  value: string;
  period:number;
}

interface IPlainsRepository {
  create({ name, value, period }: IPlainsDTO): Promise<void>;
  update({name, value, period }): Promise<void>
  list();
  delete({id});
}

export { IPlainsRepository, IPlainsDTO };
