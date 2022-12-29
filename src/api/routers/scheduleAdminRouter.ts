import { Router } from "express";
import { scheduleAdminHandler } from "~/injection";

export const scheduleAdminRouter = Router();

/**
 * @swagger
 * tags:
 *      name: ScheduleAdmin
 *      description: Gestion des routes dédié aux Gestionnaires
 */

/**
 * @openapi
 * /api/v1/schedule-admin:
 *      get:
 *          tags: [ScheduleAdmin]
 *          description: liste des gestionnaires
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
scheduleAdminRouter.get("/", scheduleAdminHandler.getScheduleAdmins);

/**
 * @openapi
 * /api/v1/schedule-admin/{id}:
 *  get:
 *      tags: [ScheduleAdmin]
 *      description: Trouver un gestionnaire par son Id
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
scheduleAdminRouter.get("/:id", scheduleAdminHandler.getScheduleAdminById);

/**
 * @openapi
 * /api/v1/schedule-admin:
 *  post:
 *      tags: [ScheduleAdmin]
 *      description: Crée un gestionnaire
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
scheduleAdminRouter.post("/", scheduleAdminHandler.createScheduleAdmin);

/**
 * @openapi
 * /api/v1/schedule-admin/{id}:
 *  put:
 *      tags: [ScheduleAdmin]
 *      description: Modifier un gestionnaire
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
scheduleAdminRouter.put("/:id", scheduleAdminHandler.updateScheduleAdmin);

/**
 * @openapi
 * /api/v1/schedule-admin/{id}:
 *  delete:
 *      tags: [ScheduleAdmin]
 *      description: Supprimer un gestionnaire
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
scheduleAdminRouter.delete("/:id", scheduleAdminHandler.deleteScheduleAdmin);
