import { Column } from "typeorm";
import { BaseEntity } from "./BaseEntity";

class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}

export default Product;