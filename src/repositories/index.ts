import { getRepository } from "typeorm"
import Permission from "../entities/Permission";
import Product from "../entities/Product";
import Role from "../entities/Role";
import User from "../entities/User"

export const UserRepository = () => {
  return getRepository(User);
}

export const RoleRepository = () => {
  return getRepository(Role);
}

export const PermissionRepository = () => {
  return getRepository(Permission);
}

export const ProductRepository = () => {
  return getRepository(Product);
}