import { Router } from "express";
import { activityHandler } from "~/injection";

export const activityRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Activity
 *      description: Gestion des routes dédié aux Activités des Praticiens
 */

/**
 * @openapi
 * /api/v1/activities:
 *      get:
 *          tags: [Activity]
 *          description: liste des activités
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
activityRouter.get("/", activityHandler.getActivities);

/**
 * @openapi
 * /api/v1/activities/{id}:
 *  get:
 *      tags: [Activity]
 *      description: Trouver une activité par son Id
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
activityRouter.get("/:id", activityHandler.getActivityById);

/**
 * @openapi
 * /api/v1/activities:
 *  post:
 *      tags: [Activity]
 *      description: Crée une activité
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"activity_type": "Genie Maléfique", "description": "Lobotomie gratuite", "address": "9 rue du régiment de la chadière", "zip_code": "62200", "city": "Boulogne sur Mer"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
activityRouter.post("/", activityHandler.createActivity);

/**
 * @openapi
 * /api/v1/activities/{id}:
 *  put:
 *      tags: [Activity]
 *      description: Modifier une activité
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
activityRouter.put("/:id", activityHandler.updateActivity);

/**
 * @openapi
 * /api/v1/activities/{id}:
 *  delete:
 *      tags: [Activity]
 *      description: Supprimer une activité
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
activityRouter.delete("/:id", activityHandler.deleteActivity);
