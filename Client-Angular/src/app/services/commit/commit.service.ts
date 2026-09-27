import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../../interfaces/commit.interface';

/**
 * Servicio encargado de la gestión de commits.
 *
 * Proporciona métodos para obtener información de commits
 * desde la API REST.
 *
 * @remarks
 * Este servicio utiliza `HttpClient` para comunicarse con el backend
 * y retorna los resultados como observables tipados con la interfaz `Commit`.
 *
 * @example
 * ```ts
 * this.commitService.getAllCommits(10).subscribe(commits => {
 *   console.log(commits);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CommitService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   *
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de commits desde el backend.
   *
  * @param countCommits Número de commits que se solicitarán.
  * @returns Observable que emite un arreglo de commits.
  *
  * @example
  * ```ts
  * this.commitService.getAllCommits(5).subscribe(commits => {
  *   console.log(commits);
  * });
  * ```
   */
  getAllCommits(countCommits: number): Observable<Commit[]> {
    return this.httpClient.get<Commit[]>(`api/commits/${countCommits}`);
  }
}
