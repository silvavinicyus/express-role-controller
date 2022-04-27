import { Request, Response } from "express";
import { CreateRolePermissionService } from "../services/CreateRolePermissionService";

export class CreateRolePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { roleId } = request.params;
    const { permissions } = request.body;

    const createRolePermissionService = new CreateRolePermissionService();

    const role = await createRolePermissionService.execute({roleId, permissions});

    return response.json(role);
  }
}