import { faker } from '@faker-js/faker';
import {
  Transaction,
  TransactionType,
} from '../../../domain/interfaces/transactions.interface';

/**
 * Servicio que genera transacciones bancarias aleatorias con faker.
 */
export class TransactionsService {
  /**
   * Genera una lista de transacciones.
   * @param count Cantidad de transacciones a generar
   * @returns Lista de transacciones generadas
   */
  getTransactions(count: number): Transaction[] {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      accountName: faker.finance.accountName(),
      accountNumber: `****${faker.finance.accountNumber(4)}`,
      type: faker.finance.transactionType() as TransactionType,
      amount: Number(faker.finance.amount({ min: 10, max: 5000 })),
      currency: faker.finance.currencyCode(),
      issuer: faker.finance.creditCardIssuer(),
      date: faker.date.recent({ days: 30 }).toISOString().slice(0, 10),
    }));
  }
}