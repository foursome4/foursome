import { IPeriodTestRepository } from "../../repositories/IPeriodTestRepository";


class DeletePeriodTestUseCase {
  constructor(private PeriodTestRepository: IPeriodTestRepository) {
    ("");
  }

  async execute({id}){

   await this.PeriodTestRepository.delete({id});
  }
}

export { DeletePeriodTestUseCase };
