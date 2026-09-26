import { Router } from "express";
import { CommitController } from "./commit.controller";

/**
 * Rutas HTTP para la gestión de commits.
 *
 * @remarks
 * Expone endpoints para generar commits ficticios mediante el
 * `CommitController`.
 */
export class CommitRoutes {
  /**
   * Devuelve el router con los endpoints de commits.
   *
   * @returns Router de Express para las rutas de commits
   */
  static get routes(): Router {
    const router = Router();
    const controller = new CommitController();

    /**
     * @openapi
     * /api/commits/{countCommits}:
     *   get:
     *     summary: Obtener listado de commits
     *     description: Retorna commits ficticios generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Commits
     *     parameters:
     *       - in: path
     *         name: countCommits
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de commits a generar
     *     responses:
     *       201:
     *         description: Lista de commits generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Commit'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countCommits", controller.getAllCommits);

    return router;
  }
}