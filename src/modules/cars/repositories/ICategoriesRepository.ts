import { Category } from "../model/Category";

// DTO => Data transfer object -> criar um objecto que vai fazer a transferencia entre uma classe e outra (ou entre camadas)
// I de interface o que vai fazer (Create) recurso (Category) fim DTO
interface ICreateCategoryDTO{
  name: string;
  description: string
}

interface ICategoriesRepository{
  findByName(name:string):Category;
  list(): Category[],
  create({name, description}: ICreateCategoryDTO):void;
}

export { ICategoriesRepository, ICreateCategoryDTO }
