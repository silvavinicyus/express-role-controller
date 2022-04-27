import { RoleDTO } from "../dto/RoleDTO";
import Role from "../entities/Role";
import { RoleRepository } from "../repositories";

export class CreateRoleService {
  async execute({name, description}: RoleDTO): Promise<Role> {
    const repo = RoleRepository();

    const roleExists = await repo.findOne({name});
    console.log(roleExists);

    if(roleExists) {
      throw new Error("Role already exists");
    }

    const role = repo.create({name, description});

    await repo.save(role);

    return role;
  }
}