import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Commit, TipoCommit } from '../../interfaces/commit.interface';

/**
 * Componente de tabla de commits.
 *
 * Se utiliza para mostrar un listado de commits en una tabla,
 * incluyendo su hash, mensaje, tipo, autor, rama y estadísticas
 * de cambios realizados en el código.
 *
 * @remarks
 * Este componente recibe los commits desde un componente padre
 * mediante el `Input` `commits` y utiliza el mapa `categoryMap`
 * para asignar un color a cada tipo de commit.
 *
 * Forma parte de la capa de presentación y representa un organismo
 * dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-commit-table [commits]="commitsList"></app-commit-table>
 * ```
 */
@Component({
  selector: 'app-commit-table',
  templateUrl: './commit-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CommitTableComponent {
  /**
   * Listado de commits que se mostrarán en la tabla.
   *
   * @type {Commit[]}
   * @remarks
   * Cada elemento debe cumplir la interfaz `Commit`.
   */
  @Input() commits: Commit[] = [];

  /**
   * Mapeo de tipos de commit a tipos de `Badge`.
   *
   * @type {Record<TipoCommit, BadgeType>}
   * @remarks
   * Permite representar visualmente los tipos definidos por
   * la convención Conventional Commits:
   * - `feat`: nuevas funcionalidades.
   * - `fix`: correcciones de errores.
   * - `refactor`: reestructuración del código.
   * - `docs`: cambios en documentación.
   * - `test`: cambios o creación de pruebas.
   * - `chore`: tareas de mantenimiento.
   * - `style`: cambios de formato o estilo.
   */
  categoryMap: Record<TipoCommit, BadgeType> = {
    feat: 'primary',
    fix: 'danger',
    refactor: 'warning',
    docs: 'dark',
    test: 'success',
    chore: 'secondary',
    style: 'primary',
  };
}
