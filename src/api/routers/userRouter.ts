import { Router } from "express";
import userHandler from "../../modules/user/handler/user.handler";

export const userRouter = Router();


/**
 * @swagger
 * tags:
 *      name: User
 *      description: Gestion des routes dédié aux utilisateurs
 */

/**
 * @openapi
 * /api/v1/users:
 *      get:
 *          tags: [User]
 *          description: liste des utilisateurs
 *          responses:
 *              200:
 *                  description: la requète s'est bien déroulée.
 */
userRouter.get("/users", userHandler.getUsers);


/**
 * @openapi
 * /api/v1/users/{id}:
 *  get:
 *      tags: [User]
 *      description: Trouver un utilisateur par son Id
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
userRouter.get("/users/:id", userHandler.getUserById)

/**
 * @openapi
 * /api/v1/users:
 *  post:
 *      tags: [User]
 *      description: Crée un utilisateur
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: {"firstname": "Fabrice", "lastname": "Lucini", "gender": "Homme", "birthday": "22/01/1977", "phone": "0425151568", "email": "test@gmail.com","password": "test"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
userRouter.post("/users/", userHandler.createUser)


/**
 * @openapi
 * /api/v1/users/{id}:
 *  put:
 *      tags: [User]
 *      description: Modifier un utilisateur
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
 *         default: {"firstname": "Fabrice", "lastname": "Lucini", "gender": "Homme", "birthday": "22/01/1977", "phone": "0425151568", "email": "test@gmail.com","password": "test"}
 *      responses:
 *        200:
 *          description: La requête s'est bien déroulée.
 */
userRouter.put("/users/:id", userHandler.updateUser)


/**
 * @openapi
 * /api/v1/users/{id}:
 *  delete:
 *      tags: [User]
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
userRouter.delete("/users/:id", userHandler.deleteUser)