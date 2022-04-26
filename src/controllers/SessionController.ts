import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

export class SessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {username, password} = request.body;

    const sessionService = new SessionService();

    const result = await sessionService.execute({username, password});

    return response.json(result);
  }
}