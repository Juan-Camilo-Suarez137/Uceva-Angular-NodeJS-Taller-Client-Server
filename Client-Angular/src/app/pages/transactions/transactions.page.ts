import { Component, inject } from '@angular/core';
import { TransactionsTableComponent } from '../../components/transactions-table/transactions-table.component';
import { Transaction } from '../../interfaces/transactions.interface';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de transacciones.
 *
 * Se utiliza para gestionar y mostrar un listado de transacciones
 * utilizando el componente `TransactionsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TransactionsService`
 * para obtener las transacciones y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  imports: [TransactionsTableComponent, AlertComponent],
})
export class TransactionsPage {
  /**
   * Listado de transacciones obtenidas desde el servicio.
   * @type {Transaction[]}
   */
  transactions: Transaction[] = [];
  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener transacciones.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private transactionsService = inject(TransactionsService);

  /**
   * Inicializa el componente y carga las transacciones.
   * @remarks
   * Se suscribe al método `getAllTransactions()` del servicio y
   * asigna los datos recibidos a la propiedad `transactions`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.transactionsService.getAllTransactions(10).subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}