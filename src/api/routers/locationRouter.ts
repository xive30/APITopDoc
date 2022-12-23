import { Router } from "express";
import locationHandler from "../../modules/handler/location.handler";

export const locationRouter = Router();


/**
 * @swagger
 * tags:
 *      name: Location
 *      description: Gestion des routes dédié aux utilisateurs
 */

/**
 * @openapi
 * /api/v1/locations:
 *      get:
 *          tags: [Location]
 *          description: liste des localisations
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
locationRouter.get("/", locationHandler.getLocations);


/**
 * @openapi
 * /api/v1/locations/{id}:
 *  get:
 *      tags: [Location]
 *      description: Trouver une localisation par son Id
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
locationRouter.get("/:id", locationHandler.getLocationById)

/**
 * @openapi
 * /api/v1/locations:
 *  post:
 *      tags: [Location]
 *      description: Crée une localisation
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"address": "8 Rue Jean Marc Poquelain", "zip_code": "95700", "city": "Roissy"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
locationRouter.post("/", locationHandler.createLocation)


/**
 * @openapi
 * /api/v1/locations/{id}:
 *  put:
 *      tags: [Location]
 *      description: Modifier une localisation
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
 *         default: {"address": "8 Rue Jean Marc Poquelain", "zip_code": "95700", "city": "Roissy"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
locationRouter.put("/:id", locationHandler.updateLocation)


/**
 * @openapi
 * /api/v1/locations/{id}:
 *  delete:
 *      tags: [Location]
 *      description: Supprimer un utilisateur
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
locationRouter.delete("/:id", locationHandler.deleteLocation)