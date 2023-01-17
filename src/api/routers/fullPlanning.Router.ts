import { Router } from "express";
import { fullPlanningHandler } from "~/injection";

export const fullPlanningRouter = Router();

/**
 * @swagger
 * tags:
 *      name: FullPlanning
 *      description: Gestion des routes dédié aux Planning complet des Praticiens
 */

/**
 * @openapi
 * /api/v1/fullplannings:
 *      get:
 *          tags: [FullPlanning]
 *          description: liste des Planning avec horaires
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
fullPlanningRouter.get("/", fullPlanningHandler.getplannings);

/**
 * @openapi
 * /api/v1/fullplannings/{id}:
 *  get:
 *      tags: [FullPlanning]
 *      description: Trouver un planning avec horaires par son Id
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
fullPlanningRouter.get("/:id", fullPlanningHandler.getPlanningById);

/**
 * @openapi
 * /api/v1/fullplannings:
 *  post:
 *      tags: [FullPlanning]
 *      description: Crée un planning avec horaires
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
fullPlanningRouter.post("/", fullPlanningHandler.createPlanning);

/**
 * @openapi
 * /api/v1/fullplannings/{id}:
 *  put:
 *      tags: [FullPlanning]
 *      description: Modifier un planning avec horaires
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
fullPlanningRouter.put("/:id", fullPlanningHandler.updatePlanning);

/**
 * @openapi
 * /api/v1/fullplannings/{id}:
 *  delete:
 *      tags: [FullPlanning]
 *      description: Supprimer un planning avec horaires
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
fullPlanningRouter.delete("/:id", fullPlanningHandler.deletePlanning);
