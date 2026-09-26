import { Repositorio, Visibilidad, LenguajePrincipal } from "../../../domain/interfaces/repositorio.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de repositorios.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar repositorios
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class RepositorioService {

  /**
    * Lista de lenguajes disponibles para los repositorios.
    *
    * @remarks
    * Se utiliza para asignar aleatoriamente un lenguaje de programación
    * a cada repositorio.
   */
  private lenguajePrincipal: LenguajePrincipal[] = [
    'Java',
    'Javascript',
    'Typescript',
    'Python',
    'C++',
    'Ruby'
  ];

  /**
   * Lista de visibilidades disponibles para los repositorios.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente una visibilidad
   * a cada repositorio generado.
   */
  private visibilidad: Visibilidad[] = [
    'Público',
    'Privado'
  ];

  /**
   * Obtiene un listado de repositorio generados dinámicamente.
   *
    * @param countRepositorios Cantidad de repositorios a generar
    * @returns Promesa que resuelve un arreglo de repositorios
   *
   * @example
   * ```ts
   * const repositories = await RepositorioService.getAllRepositorios(5);
   * ```
   */
  public async getAllRepositorios(countRepositorios: number): Promise<Repositorio[]> {
    const repos: Promise<Repositorio>[] = [];

    for (let i = 1; i <= countRepositorios; i++) {
      repos.push(this.generateRepositorio(i));
    }

    return Promise.all(repos);
  }

  /**
  * Genera un repositorio ficticio.
   *
    * @param id Identificador único del repositorio
    * @returns Promesa que resuelve un repositorio generado
   */
  private generateRepositorio(id: number): Promise<Repositorio> {
    return Promise.resolve({
      id,
      nombre: faker.lorem.slug(),
      propietario: faker.internet.username(),
      lenguajePrincipal: faker.helpers.arrayElement(this.lenguajePrincipal),
      estrellas: faker.number.int({ min: 0, max: 10000 }),
      forks: faker.number.int({ min: 0, max: 1000 }),
      fechaCreacion: faker.date.past({ years: 5 }),
      descripcion: faker.lorem.sentence(),
      visibilidad: faker.helpers.arrayElement(this.visibilidad),
    });
  }
}
