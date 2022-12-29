import { Router } from "express";
import { appointmentHandler } from "~/injection";

export const appointmentRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Appointment
 *      description: Gestion des routes dédié aux Rendez-vous
 */

/**
 * @openapi
 * /api/v1/appointments:
 *      get:
 *          tags: [Appointment]
 *          description: liste des Rendez-vous
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
appointmentRouter.get("/", appointmentHandler.getAppointments);

/**
 * @openapi
 * /api/v1/appointments/{id}:
 *  get:
 *      tags: [Appointment]
 *      description: Trouver une Rendez-vous par son Id
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
appointmentRouter.get("/:id", appointmentHandler.getAppointmentById);

/**
 * @openapi
 * /api/v1/appointments:
 *  post:
 *      tags: [Appointment]
 *      description: Crée une Rendez-vous
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
appointmentRouter.post("/", appointmentHandler.createAppointment);

/**
 * @openapi
 * /api/v1/appointments/{id}:
 *  put:
 *      tags: [Appointment]
 *      description: Modifier une Rendez-vous
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
appointmentRouter.put("/:id", appointmentHandler.updateAppointment);

/**
 * @openapi
 * /api/v1/appointments/{id}:
 *  delete:
 *      tags: [Appointment]
 *      description: Supprimer une Rendez-vous
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
appointmentRouter.delete("/:id", appointmentHandler.deleteAppointment);
