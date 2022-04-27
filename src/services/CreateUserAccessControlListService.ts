import { UserACLDto } from "../dto/UserAclDTO";
import User from "../entities/User";
import { PermissionRepository, RoleRepository, UserRepository } from "../repositories";

export class CreateUserAccessControlListService {
  async execute({userId, roles, permissions}: UserACLDto): Promise<User>{
    const repo = UserRepository();

    const userExists = await repo.findOne(userId);

    if(!userExists) {
      throw new Error('There is no user with the given id');
    }

    const permissionsExists = await PermissionRepository().findByIds(permissions);

    const rolesExists = await RoleRepository().findByIds(roles);

    userExists.permissions = permissionsExists;
    userExists.roles = rolesExists;
    
    await repo.save(userExists);

    return userExists;
  }
}