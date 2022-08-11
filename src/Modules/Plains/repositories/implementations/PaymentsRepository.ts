import { collections } from "../../../../../services/database.service";
import { Payments } from "../../models/Payments";
import { IPaymentsDTO, IPaymentsRepository } from "../IPaymentsRepository";
import {v4 as uuidv4} from 'uuid'

class PaymentsRepository implements IPaymentsRepository {
  private payments: Payments[];

  private static INSTANCE: PaymentsRepository;

  private constructor() {
    this.payments = [];
  }

  public static getInstance(): PaymentsRepository {
    if (!PaymentsRepository.INSTANCE) {
      PaymentsRepository.INSTANCE = new PaymentsRepository();
    }

    return PaymentsRepository.INSTANCE;
  }

  async create({ idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant, aceptTerms, status }: IPaymentsDTO) {
    const payment: Payments = new Payments();
    const _id = uuidv4()
    Object.assign(payment, {
      _id, id: _id, idPlain, idAccount, username, email, namePlain, referencePlain, value, period, linkComprovant,aceptTerms, status, created_at: new Date(),
    });

    this.payments.push(payment);
    console.log(payment)

    await collections.payments.insertOne(payment).then((result) => {
      console.log(result) 
    }).catch(error => {
      console.log(error)
    })
  }

  list(){}

  async delete({id}) {
    await collections.payments.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  async update({idPlain, idAccount, username, email, namePlain, value, period, linkComprovant,aceptTerms, status}): Promise<void> {}
}

export { PaymentsRepository };
