import { Plains } from "../models/Plains";

interface IPlainsDTO {
  reference: string;
  name: string;
  value: string;
  period:number;
}

interface IPlainsRepository {
  create({ reference, name, value, period }: IPlainsDTO): Promise<void>;
  update({reference, name, value, period }): Promise<void>
  list();
  delete({id});
}

export { IPlainsRepository, IPlainsDTO };
