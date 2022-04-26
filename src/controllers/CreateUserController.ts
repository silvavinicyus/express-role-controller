import {Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { username, password } = request.body;

    const createUsersService = new CreateUserService();

    const user = await createUsersService.execute({username, password});

    return response.json(user);
  }
}