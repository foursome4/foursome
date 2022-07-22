import { INewsRepository } from "../../repositories/INewsRepository";

class DeleteNewsUseCase {
  constructor(private NewsRepository: INewsRepository) {
    ("");
  }

  async execute({id}){

   await this.NewsRepository.delete({id});
  }
}

export { DeleteNewsUseCase };
