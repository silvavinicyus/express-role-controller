import { hash } from "bcryptjs";
import { UserDTO } from "../dto/UserDTO";
import User from "../entities/User";
import { UserRepository } from "../repositories";

export class CreateUserService {
  async execute({username, password}: UserDTO): Promise<Error | User> {
    const existUser = await UserRepository().findOne({username});

    if(existUser) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = UserRepository().create({username, password: passwordHash});

    await UserRepository().save(user);

    return user;
  } 
}