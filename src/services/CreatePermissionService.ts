import { PermissionDTO } from "../dto/PermissionDTO";
import Permission from "../entities/Permission";
import { PermissionRepository } from "../repositories";

export class CreatePermissionService {
  async execute({name, description}: PermissionDTO): Promise<Permission> {
    const repo = PermissionRepository();

    const permissionExists = await repo.findOne({name});

    if(permissionExists) {
      throw new Error("Permission already exists");
    }

    const permission = repo.create({name, description});

    await repo.save(permission);

    return permission;
  }
}