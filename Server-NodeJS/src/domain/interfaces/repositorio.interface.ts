/**
 * Interfaz que representa un repositorio de código.
 *
 * Contiene la información principal necesaria para mostrar un repositorio
 * en una tabla o componente de listado.
 *
 * @remarks
 * Cada repositorio debe tener un `id` único, un nombre descriptivo,
 * un propietario, un lenguaje principal válido y sus estadísticas
 * de estrellas y forks.
 *
 * @example
 * ```ts
 * const repositorio: Repositorio = {
 *   id: 1,
 *   nombre: 'proyecto-ejemplo',
 *   propietario: 'usuario-ejemplo',
 *   lenguajePrincipal: 'Typescript',
 *   estrellas: 120,
 *   forks: 25,
 *   fechaCreacion: new Date('2024-01-15'),
 *   descripcion: 'Repositorio de ejemplo',
 *   visibilidad: 'Público'
 * };
 * ```
 */
export interface Repositorio {
    /** Identificador único del repositorio */
    id: number;

    /** Nombre del repositorio */
    nombre: string;

    /** Usuario u organización propietaria del repositorio */
    propietario: string;

    /** Lenguaje de programación principal */
    lenguajePrincipal: LenguajePrincipal;

    /** Cantidad de estrellas del repositorio */
    estrellas: number;

    /** Cantidad de forks o bifurcaciones */
    forks: number;

    /** Fecha en la que fue creado el repositorio */
    fechaCreacion: Date;

    /** Descripción del repositorio */
    descripcion: string;

    /** Nivel de visibilidad del repositorio, por ejemplo, público o privado */
    visibilidad: Visibilidad;
}

/**
 * Lenguajes de programación principales permitidos para un repositorio.
 */
export type LenguajePrincipal =
    | 'Java'
    | 'Javascript'
    | 'Typescript'
    | 'Python'
    | 'C++'
    | 'Ruby';
/**
 * Nivel de visibilidad de un repositorio.
 */
export type Visibilidad = 'Público' | 'Privado';