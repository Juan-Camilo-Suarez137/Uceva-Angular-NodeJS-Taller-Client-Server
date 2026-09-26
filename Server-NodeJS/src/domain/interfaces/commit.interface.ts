/**
 * Interfaz que representa un commit dentro de un repositorio.
 *
 * Contiene la información principal necesaria para mostrar un commit
 * en una tabla o componente de listado.
 *
 * @remarks
 * Cada commit debe tener un `id` único, un hash identificador,
 * un mensaje descriptivo, un tipo válido según convención de commits,
 * un autor y estadísticas de cambios sobre el código.
 *
 * @example
 * ```ts
 * const commit: Commit = {
 *   id: 1,
 *   hash: 'a1b2c3d',
 *   mensaje: 'agregar validación de formulario',
 *   tipo: 'feat',
 *   autor: 'usuario-ejemplo',
 *   rama: 'develop',
 *   fecha: new Date('2024-01-15'),
 *   archivosModificados: 3,
 *   lineasAgregadas: 45,
 *   lineasEliminadas: 12
 * };
 * ```
 */
export interface Commit {
    /** Identificador único del commit */
    id: number;

    /** Hash corto identificador del commit */
    hash: string;

    /** Mensaje descriptivo del commit */
    mensaje: string;

    /** Tipo de commit según convención (Conventional Commits) */
    tipo: TipoCommit;

    /** Usuario que realizó el commit */
    autor: string;

    /** Rama sobre la cual se realizó el commit */
    rama: string;

    /** Fecha en la que se realizó el commit */
    fecha: Date;

    /** Cantidad de archivos modificados en el commit */
    archivosModificados: number;

    /** Cantidad de líneas agregadas en el commit */
    lineasAgregadas: number;

    /** Cantidad de líneas eliminadas en el commit */
    lineasEliminadas: number;
}

/**
 * Tipos de commit permitidos según la convención de Conventional Commits.
 */
export type TipoCommit =
    | 'feat'
    | 'fix'
    | 'refactor'
    | 'docs'
    | 'test'
    | 'chore'
    | 'style';