import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

// repositorio -> é a camada ou a class que vai fazer a manipulação de dados -> vai acessar o banco de dados
class CategoriesRepository implements ICategoriesRepository {

  // falando que o categories segue o modelo Category
  private categories: Category[];

  constructor() {
    //categories esta recebendo um array
    this.categories = [];
  }

  //metodo para cadastrar
  create({name, description}: ICreateCategoryDTO): void {

    //falando que o category segue o modelo Category e instanciando o model Category
    const category: Category = new Category();

    // metendo dados no category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  //lista todos os elementos da tabela
  list(): Category[]{
    return this.categories
  }

  findByName(name: string): Category{
    const category = this.categories.find(category => category.name === name);
    return category;
  }

}

export { CategoriesRepository }
