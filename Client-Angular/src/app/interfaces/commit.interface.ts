/**
 * Interfaz que representa un commit realizado en un repositorio.
 *
 * Contiene la información principal necesaria para mostrar un commit
 * en una tabla o componente de listado.
 */
export interface Commit {
  /** Identificador único del commit. */
  id: number;

  /** Hash corto identificador del commit. */
  hash: string;

  /** Mensaje descriptivo del commit. */
  mensaje: string;

  /** Tipo de commit según Conventional Commits. */
  tipo: TipoCommit;

  /** Usuario que realizó el commit. */
  autor: string;

  /** Rama sobre la cual se realizó el commit. */
  rama: string;

  /** Fecha en la que se realizó el commit. */
  fecha: Date;

  /** Cantidad de archivos modificados. */
  archivosModificados: number;

  /** Cantidad de líneas agregadas. */
  lineasAgregadas: number;

  /** Cantidad de líneas eliminadas. */
  lineasEliminadas: number;
}

/** Tipos permitidos según la convención Conventional Commits. */
export type TipoCommit =
  | 'feat'
  | 'fix'
  | 'refactor'
  | 'docs'
  | 'test'
  | 'chore'
  | 'style';
