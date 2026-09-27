import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositorio } from '../../interfaces/repositorio.interface';

/**
 * Servicio encargado de la gestión de repositorios.
 *
 * Proporciona métodos para obtener repositorios generados por la API REST.
 */
@Injectable({
  providedIn: 'root',
})
export class RepositorioService {
  /** Cliente HTTP utilizado para comunicarse con el backend. */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de repositorios desde el backend.
   *
   * @param countRepositorios Número de repositorios que se solicitarán.
   * @returns Observable que emite un arreglo de repositorios.
   *
   * @example
   * ```ts
   * this.repositorioService.getAllRepositorios(10).subscribe(repositorios => {
   *   console.log(repositorios);
   * });
   * ```
   */
  getAllRepositorios(countRepositorios: number): Observable<Repositorio[]> {
    return this.httpClient.get<Repositorio[]>(`api/repositorios/${countRepositorios}`);
  }
}
