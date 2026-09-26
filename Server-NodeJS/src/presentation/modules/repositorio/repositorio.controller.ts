import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { RepositorioService } from "./repositorio.service";

/**
 * Controlador de repositorios.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con repositorios,
 * delegando la lógica de negocio al `RepositorioService`.
 */
export class RepositorioController {

  /**
  * Servicio de repositorios.
    */
  private readonly repositorioService = new RepositorioService();

  /**
  * Maneja la petición HTTP para obtener un listado de repositorios.
    *
    * @remarks
  * El número de repositorios a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /repositorios/10
   * ```
   */
  getAllRepositorios = (req: Request, res: Response): void => {
    const { countRepositorios } = req.params;

    setTimeout(() => {
      this.repositorioService
      .getAllRepositorios(Number(countRepositorios))
      .then((repositorios) => res.status(201).json(repositorios))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}