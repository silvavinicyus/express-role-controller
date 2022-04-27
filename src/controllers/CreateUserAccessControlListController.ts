import { Request, Response } from "express";
import { CreateUserAccessControlListService } from "../services/CreateUserAccessControlListService";

export class CreateUserAccessControlListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {permissions, roles} = request.body;
    const { id } = request.user;

    const createUserAclService = new CreateUserAccessControlListService();

    const userAcl = await createUserAclService.execute({userId: id, permissions, roles});

    return response.json(userAcl);
  }
}