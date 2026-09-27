import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import {
  LenguajePrincipal,
  Repositorio,
  Visibilidad,
} from '../../interfaces/repositorio.interface';

/**
 * Componente de tabla de repositorios.
 *
 * Se utiliza para mostrar un listado de repositorios en una tabla,
 * mostrando sus datos principales y badges para el lenguaje y la
 * visibilidad.
 *
 * @remarks
 * Este componente recibe los repositorios desde un componente padre
 * a través del Input `repositorios` y utiliza los mapas de badges
 * para asignar colores según el lenguaje y la visibilidad.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-repositorio-table [repositorios]="repositorios"></app-repositorio-table>
 * ```
 */
@Component({
  selector: 'app-repositorio-table',
  templateUrl: './repositorio-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class RepositorioTableComponent {
  /**
  * Listado de repositorios que se mostrarán en la tabla.
  * @type {Repositorio[]}
   * @remarks
   * Este Input permite pasar un array de repositorios desde un componente padre.
   */
  @Input() repositorios: Repositorio[] = [];

  /**
   * Mapeo de lenguajes principales a tipos de Badge.
   * @type {Record<LenguajePrincipal, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores a los badges del lenguaje principal.
   */
  categoryMap: Record<LenguajePrincipal, BadgeType> = {
    Java: 'danger',
    Javascript: 'warning',
    Typescript: 'primary',
    Python: 'success',
    'C++': 'dark',
    Ruby: 'secondary',
  };

  /** Mapeo de visibilidades a tipos de Badge. */
  visibilityMap: Record<Visibilidad, BadgeType> = {
    'Público': 'success',
    'Privado': 'dark',
  };
}
