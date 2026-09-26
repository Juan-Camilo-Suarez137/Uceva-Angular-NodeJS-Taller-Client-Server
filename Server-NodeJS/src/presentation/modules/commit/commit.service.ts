import { Commit, TipoCommit } from "../../../domain/interfaces/commit.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de commits.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar commits
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class CommitService {

  /**
   * Lista de tipos de commit disponibles.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un tipo de commit
   * a cada commit generado, siguiendo la convención de Conventional Commits.
   */
  private tipoCommit: TipoCommit[] = [
    'feat',
    'fix',
    'refactor',
    'docs',
    'test',
    'chore',
    'style'
  ];

  /**
   * Obtiene un listado de commits generados dinámicamente.
   *
   * @param countCommits Cantidad de commits a generar
   * @returns Promesa que resuelve un arreglo de commits
   *
   * @example
   * ```ts
   * const commits = await CommitService.getAllCommits(5);
   * ```
   */
  public async getAllCommits(countCommits: number): Promise<Commit[]> {
    const commits: Promise<Commit>[] = [];

    for (let i = 1; i <= countCommits; i++) {
      commits.push(this.generateCommit(i));
    }

    return Promise.all(commits);
  }

  /**
   * Genera un commit ficticio.
   *
   * @param id Identificador único del commit
   * @returns Promesa que resuelve un commit generado
   */
  private generateCommit(id: number): Promise<Commit> {
    return Promise.resolve({
      id,
      hash: faker.git.commitSha({ length: 7 }),
      mensaje: faker.git.commitMessage(),
      tipo: faker.helpers.arrayElement(this.tipoCommit),
      autor: faker.internet.username(),
      rama: faker.git.branch(),
      fecha: faker.date.past({ years: 2 }),
      archivosModificados: faker.number.int({ min: 1, max: 20 }),
      lineasAgregadas: faker.number.int({ min: 0, max: 500 }),
      lineasEliminadas: faker.number.int({ min: 0, max: 200 }),
    });
  }
}