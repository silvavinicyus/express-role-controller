import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserService } from "./services/CreateUserService";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

routes.post("/products", new CreateProductController().handle);
routes.get("/products", new GetAllProductsController().handle);

routes.post("/roles", ensureAuthenticated(), new CreateRoleController().handle);
routes.post("/permissions", ensureAuthenticated(), new CreatePermissionController().handle);
export { routes };