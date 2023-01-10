import { Router } from "express";
import { authHandler } from "~/injection";

export const authRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Auth
 *      description: Gestion aux connections
 */

/**
 * @openapi
 * /api/v1/auths/login:
 *      get:
 *          tags: [Auth]
 *          description: Connection aux compte
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
authRouter.post("/login", authHandler.login);

/**
 * @openapi
 * /api/v1/auths/token:
 *      get:
 *          tags: [Auth]
 *          description: Vérification token
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
authRouter.post("/token", authHandler.token);


