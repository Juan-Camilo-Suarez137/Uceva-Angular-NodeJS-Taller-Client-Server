import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Transaction, TransactionType } from '../../interfaces/transactions.interface';

/**
 * Tabla que muestra el listado de transacciones.
 */
@Component({
  selector: 'app-transactions-table',
  imports: [BadgeAtom],
  templateUrl: './transactions-table.component.html',
})
export class TransactionsTableComponent {
  /** Transacciones a mostrar en la tabla */
  @Input() transactions: Transaction[] = [];

  /** Color del badge según el tipo de movimiento */
  readonly typeBadge: Record<TransactionType, BadgeType> = {
    deposit: 'success',
    withdrawal: 'danger',
    payment: 'primary',
    invoice: 'dark',
  };
}