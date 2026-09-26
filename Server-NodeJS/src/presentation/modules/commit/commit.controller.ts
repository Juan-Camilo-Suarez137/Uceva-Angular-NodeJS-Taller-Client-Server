import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CommitService } from "./commit.service";

/**
 * Controlador de commits.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con commits,
 * delegando la lógica de negocio al `CommitService`.
 */
export class CommitController {

  /**
   * Servicio de commits.
   */
  private readonly commitService = new CommitService();

  /**
   * Maneja la petición HTTP para obtener un listado de commits.
   *
   * @remarks
   * El número de commits a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /commits/10
   * ```
   */
  getAllCommits = (req: Request, res: Response): void => {
    const countCommits = Number(req.params.countCommits);

    if (!Number.isInteger(countCommits) || countCommits < 1) {
      res.status(400).json({
        error: 'La cantidad de commits debe ser un entero mayor que cero'
      });
      return;
    }
    setTimeout(() => {
      this.commitService
        .getAllCommits(Number(countCommits))
        .then((commits) => res.status(201).json(commits))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}