import { Router } from "express";
import { patientHandler } from "~/injection";

export const patientRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Patient
 *      description: Gestion des routes dédié aux patients
 */

/**
 * @openapi
 * /api/v1/patients:
 *      get:
 *          tags: [Patient]
 *          description: liste des patients
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
patientRouter.get("/", patientHandler.getPatients);

/**
 * @openapi
 * /api/v1/patients/{id}:
 *  get:
 *      tags: [Patient]
 *      description: Trouver un patient par son Id
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
patientRouter.get("/:id", patientHandler.getPatientById);

/**
 * @openapi
 * /api/v1/patients:
 *  post:
 *      tags: [Patient]
 *      description: Crée un patient
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
patientRouter.post("/", patientHandler.createPatient);

/**
 * @openapi
 * /api/v1/patients/{id}:
 *  put:
 *      tags: [Patient]
 *      description: Modifier un patient
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
patientRouter.put("/:id", patientHandler.updatePatient);

/**
 * @openapi
 * /api/v1/patients/{id}:
 *  delete:
 *      tags: [Patient]
 *      description: Supprimer un patient
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
patientRouter.delete("/:id", patientHandler.deletePatient);
