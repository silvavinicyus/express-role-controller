import { RolePermissionDTO } from "../dto/RolePermissionDTO";
import Role from "../entities/Role";
import { PermissionRepository, RoleRepository } from "../repositories";

export class CreateRolePermissionService {
  async execute({roleId, permissions}: RolePermissionDTO): Promise<Role> {
    const repo = RoleRepository();

    const role = await repo.findOne(roleId);

    if(!role) {
      throw new Error("Ther is no role with the given id");
    }

    const permissionsExists = await PermissionRepository().findByIds(permissions);

    role.permissions = permissionsExists;

    await repo.save(role);

    return role;
  }
}