import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories";

export function can(permissionsRoutes: string[]) {
  return async(request: Request, response: Response, next: NextFunction) => {
    const { id } = request.user;

    const user = await UserRepository().findOne({
      where: {id},
      relations: ["permissions"]
    });

    if(!user) {
      return response.status(400).json("There is no user with the given id");
    }

    const permissionsExists = user.permissions.map((permission) => permission.name).some(permission => permissionsRoutes.includes(permission));

    if(!permissionsExists) {
      return response.status(403).end()
    }

    return next();

  }
}

export function is(rolesRoutes: string[]) {
  return async(request: Request, response: Response, next: NextFunction) => {
    const { id } = request.user;

    const user = await UserRepository().findOne({
      where: {id},
      relations: ["roles"]
    });

    if(!user) {
      return response.status(400).json("There is no user with the given id");
    }

    const rolesExists = user.roles.map((role) => role.name).some(role => rolesRoutes.includes(role));

    if(!rolesExists) {
      return response.status(403).end()
    }

    return next();
  }
}