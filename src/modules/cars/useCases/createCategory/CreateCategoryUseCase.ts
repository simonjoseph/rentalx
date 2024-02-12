
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
  name: string,
  description: string
}

//Nos service crio o metodo fez tb já o execute
class CreateCategoryUseCase {

// é o mesmo que fazer o private
  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}: IRequest): void {
    const categoriesAllreadyExists = this.categoriesRepository.findByName(name);

    if (categoriesAllreadyExists) {
      throw new Error("Categories already exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase }
