import { Router } from "express";
import { roleHandler } from "~/injection";

export const roleRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Role
 *      description: Gestion des routes dédié aux Roles
 */

/**
 * @openapi
 * /api/v1/roles:
 *      get:
 *          tags: [Role]
 *          description: liste des roles
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
roleRouter.get("/", roleHandler.getRoles);

/**
 * @openapi
 * /api/v1/roles/{id}:
 *  get:
 *      tags: [Role]
 *      description: Trouver un role par son Id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
roleRouter.get("/:id", roleHandler.getRoleById);

/**
 * @openapi
 * /api/v1/roles:
 *  post:
 *      tags: [Role]
 *      description: Crée un role
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"json à définir": "json à définir",}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
roleRouter.post("/", roleHandler.createRole);

/**
 * @openapi
 * /api/v1/roles/{id}:
 *  put:
 *      tags: [Role]
 *      description: Modifier un role
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: formData
 *         default: {"json à définir": "json à définir",}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
roleRouter.put("/:id", roleHandler.updateRole);

/**
 * @openapi
 * /api/v1/roles/{id}:
 *  delete:
 *      tags: [Role]
 *      description: Supprimer un role
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
roleRouter.delete("/:id", roleHandler.deleteRole);
