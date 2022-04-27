import { Request, Response } from "express";
import { CreatePermissionService } from "../services/CreatePermissionService";

export class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {

    const {name, description} = request.body;

    const createPermissionService = new CreatePermissionService();

    const permission = await createPermissionService.execute({name, description});

    return response.json(permission);
  }
}