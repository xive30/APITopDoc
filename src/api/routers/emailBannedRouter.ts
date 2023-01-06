import { Router } from "express";
import { emailBannedHandler } from "~/injection";

export const emailBannedRouter = Router();

/**
 * @swagger
 * tags:
 *      name: EmailBanned
 *      description: Gestion des routes dédié aux Emails Bannis
 */

/**
 * @openapi
 * /api/v1/emails-banned:
 *      get:
 *          tags: [EmailBanned]
 *          description: liste des Emails Bannis
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
emailBannedRouter.get("/", emailBannedHandler.getEmailsBanned);

/**
 * @openapi
 * /api/v1/emails-banned/{id}:
 *  get:
 *      tags: [EmailBanned]
 *      description: Trouver un Email Banni par son Id
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
emailBannedRouter.get("/:id", emailBannedHandler.getEmailBannedById);

/**
 * @openapi
 * /api/v1/emails-banned:
 *  post:
 *      tags: [EmailBanned]
 *      description: Crée un Email Banni
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"id_email_banned": "5", "email": menfou@gmail.com", "reason": "Luc Vigneron", "banned_date": "2023-01-06"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
emailBannedRouter.post("/", emailBannedHandler.createEmailBanned);

/**
 * @openapi
 * /api/v1/emails-banned/{id}:
 *  put:
 *      tags: [EmailBanned]
 *      description: Modifier un Email Banni
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
 *         default: {"id_email_banned": "5", "email": menfou@gmail.com", "reason": "Luc Vigneron", "banned_date": "2023-01-06"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
emailBannedRouter.put("/:id", emailBannedHandler.updateEmailBanned);

/**
 * @openapi
 * /api/v1/emails-banned/{id}:
 *  delete:
 *      tags: [EmailBanned]
 *      description: Supprimer un Email Banni
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
emailBannedRouter.delete("/:id", emailBannedHandler.deleteEmailBanned);
