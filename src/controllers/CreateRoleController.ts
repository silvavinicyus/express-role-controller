import { Request, Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {

    const {name, description} = request.body;

    const createRoleService = new CreateRoleService();

    const role = await createRoleService.execute({name, description});

    return response.json(role);
  }
}