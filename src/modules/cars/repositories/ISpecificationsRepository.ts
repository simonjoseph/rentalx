import { Specification } from "../model/Specification";

interface ICreateISpecificationDTO{
  name: string;
  description: string;
}

interface ISpecificationsRepository{
  create({name, description}: ICreateISpecificationDTO):void;
  findByName(name:string):Specification;
}

export { ISpecificationsRepository, ICreateISpecificationDTO }
