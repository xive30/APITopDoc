import { Router } from "express";
import handler from "../../modules/user/handler/user.handler";

export const userRouter = Router();


/**
 * @swagger
 * tags:
 *      name: User
 *      description: Gestion des routes dédié aux utilisateurs
 */

/**
 * @openapi
 * /api/v1/users:
 *      get:
 *          tags: [User]
 *          description: liste des utilisateurs
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
userRouter.get("/users", handler.getUsers);
