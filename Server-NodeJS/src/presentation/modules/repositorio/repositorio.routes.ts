import { Router } from "express";
import { RepositorioController } from "./repositorio.controller";

/**
 * Rutas HTTP para la gestión de repositorios.
 *
 * @remarks
 * Expone endpoints para generar repositorios ficticios mediante el
 * `RepositorioController`.
 */
export class RepositorioRoutes {
  /**
   * Devuelve el router con los endpoints de repositorios.
   *
   * @returns Router de Express para las rutas de repositorios
   */
  static get routes(): Router {
    const router = Router();
    const controller = new RepositorioController();

    /**
     * @openapi
     * /api/repositorios/{countRepositorios}:
     *   get:
     *     summary: Obtener listado de repositorios
     *     description: Retorna repositorios ficticios generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Repositorios
     *     parameters:
     *       - in: path
     *         name: countRepositorios
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de repositorios a generar
     *     responses:
     *       201:
     *         description: Lista de repositorios generados
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countRepositorios", controller.getAllRepositorios);

    return router;
  }
}