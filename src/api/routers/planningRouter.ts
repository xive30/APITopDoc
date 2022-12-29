import { Router } from "express";
import { planningHandler } from "~/injection";

export const planningRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Planning
 *      description: Gestion des routes dédié aux Planning des Praticiens
 */

/**
 * @openapi
 * /api/v1/plannings:
 *      get:
 *          tags: [Planning]
 *          description: liste des Planning
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
planningRouter.get("/", planningHandler.getplannings);

/**
 * @openapi
 * /api/v1/plannings/{id}:
 *  get:
 *      tags: [Planning]
 *      description: Trouver une planning par son Id
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
planningRouter.get("/:id", planningHandler.getPlanningById);

/**
 * @openapi
 * /api/v1/plannings:
 *  post:
 *      tags: [Planning]
 *      description: Crée une planning
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
planningRouter.post("/", planningHandler.createPlanning);

/**
 * @openapi
 * /api/v1/plannings/{id}:
 *  put:
 *      tags: [Planning]
 *      description: Modifier une planning
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
planningRouter.put("/:id", planningHandler.updatePlanning);

/**
 * @openapi
 * /api/v1/plannings/{id}:
 *  delete:
 *      tags: [Planning]
 *      description: Supprimer une planning
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
planningRouter.delete("/:id", planningHandler.deletePlanning);
