import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../../interfaces/commit.interface';

/** Servicio encargado de obtener commits desde la API REST. */
@Injectable({
  providedIn: 'root',
})
export class CommitService {
  /** Cliente HTTP utilizado para comunicarse con el backend. */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de commits desde el backend.
   *
   * @param countCommits Número de commits que se solicitarán.
   * @returns Observable que emite un arreglo de commits.
   */
  getAllCommits(countCommits: number): Observable<Commit[]> {
    return this.httpClient.get<Commit[]>(`api/commits/${countCommits}`);
  }
}
