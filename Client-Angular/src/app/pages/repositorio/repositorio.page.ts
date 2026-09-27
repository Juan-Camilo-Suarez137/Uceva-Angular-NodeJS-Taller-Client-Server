import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { RepositorioTableComponent } from '../../components/repositorio-table/repositorio-table.component';
import { Repositorio } from '../../interfaces/repositorio.interface';
import { State } from '../../interfaces/state.interface';
import { RepositorioService } from '../../services/repositorio/repositorio.service';

/**
 * Componente contenedor de repositorios.
 *
 * Consume el servicio de repositorios y entrega los datos a la tabla.
 */
@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.page.html',
  imports: [RepositorioTableComponent, AlertComponent],
})
export class RepositorioPage {
  /** Listado de repositorios obtenido desde el backend. */
  repositorios: Repositorio[] = [];

  /** Estado actual de la carga de repositorios. */
  state: State = 'init';

  /** Servicio utilizado para consultar los repositorios. */
  private repositorioService = inject(RepositorioService);

  /** Carga los repositorios al inicializar la página. */
  ngOnInit(): void {
    this.state = 'loading';
    this.repositorioService.getAllRepositorios(10).subscribe({
      next: (repositorios) => {
        this.repositorios = repositorios;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
