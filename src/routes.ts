import { Router } from "express";
import { CreateUserService } from "./services/CreateUserService";

const routes = Router();

routes.post("/users");