import User from "../entities/User";
import { UserRepository } from "../repositories";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
import { UserDTO } from "../dto/UserDTO";

export class SessionService{
  async execute({username, password}: UserDTO) {
    const repo = UserRepository();

    const user = await repo.findOne({username});
    
    if(!user) {
      throw new Error("There is no user with the given username");
    }

    const passwordMatch = await compare(password, user.password);

    if(!password) {
      throw new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id    
    });

    return {token};
  }
}