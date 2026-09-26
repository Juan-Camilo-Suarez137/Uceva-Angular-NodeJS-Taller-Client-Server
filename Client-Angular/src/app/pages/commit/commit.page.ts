import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { CommitTableComponent } from '../../components/commit-table/commit-table.component';
import { Commit } from '../../interfaces/commit.interface';
import { State } from '../../interfaces/state.interface';
import { CommitService } from '../../services/commit/commit.service';

/** Componente contenedor que consulta y muestra el listado de commits. */
@Component({
  selector: 'app-commit',
  templateUrl: './commit.page.html',
  imports: [CommitTableComponent, AlertComponent],
})
export class CommitPage {
  /** Commits obtenidos desde el backend. */
  commits: Commit[] = [];

  /** Estado actual de la carga. */
  state: State = 'init';

  /** Servicio utilizado para consultar commits. */
  private commitService = inject(CommitService);

  /** Carga los commits cuando se inicializa la página. */
  ngOnInit(): void {
    this.state = 'loading';
    this.commitService.getAllCommits(10).subscribe({
      next: (commits) => {
        this.commits = commits;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
