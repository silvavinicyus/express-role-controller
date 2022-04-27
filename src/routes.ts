import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateRolePermissionController } from "./controllers/CreateRolePermissionController";
import { CreateUserAccessControlListController } from "./controllers/CreateUserAccessControlListController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { can, is } from "./middlewares/permissions";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

routes.post("/products", ensureAuthenticated(), is(['admin']), new CreateProductController().handle);
routes.get("/products", ensureAuthenticated(), can(['list_product']) ,new GetAllProductsController().handle);

routes.post("/roles", ensureAuthenticated(), new CreateRoleController().handle);
routes.post("/permissions", ensureAuthenticated(), new CreatePermissionController().handle);

routes.post("/users/acl", ensureAuthenticated(), new CreateUserAccessControlListController().handle);

routes.post("/roles/:roleId", ensureAuthenticated(), new CreateRolePermissionController().handle);

export { routes };
