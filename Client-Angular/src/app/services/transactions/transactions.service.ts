import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../interfaces/transactions.interface';

/**
 * Servicio que consume el API de transacciones.
 */
@Injectable({ providedIn: 'root' })
export class TransactionsService {
  /** Cliente HTTP de Angular */
  private readonly httpClient = inject(HttpClient);

  /**
   * Obtiene transacciones generadas por el servidor.
   * @param count Cantidad de transacciones a pedir
   * @returns Observable con las transacciones
   */
  getAll(count: number = 10): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`api/transactions/${count}`);
  }
}