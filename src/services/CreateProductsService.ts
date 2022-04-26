import ProductDTO from "../dto/ProductDTO";
import { ProductRepository } from "../repositories";

export class CreateProductsService {
  async execute({name, description, price}: ProductDTO) {
    const product = ProductRepository().create({
      name, description, price,
    });

    await ProductRepository().save(product);

    return product;
  }
}