/**
 * Interfaz que representa una transacción bancaria.
 *
 * Contiene la información básica necesaria para mostrar una transacción
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada transacción debe tener un `id` único, el nombre y el número enmascarado
 * de la cuenta, el tipo de movimiento (`type`), el monto, la moneda,
 * la franquicia de la tarjeta y la fecha.
 *
 * @example
 * ```ts
 * const transaccion: Transaction = {
 *   id: 1,
 *   accountName: 'Personal Loan Account',
 *   accountNumber: '****2584',
 *   type: 'payment',
 *   amount: 617.87,
 *   currency: 'USD',
 *   issuer: 'visa',
 *   date: '2026-09-20'
 * };
 * ```
 */
export interface Transaction {
  /** Identificador único de la transacción */
  id: number;

  /** Nombre de la cuenta */
  accountName: string;

  /** Número de cuenta enmascarado (solo los últimos 4 dígitos) */
  accountNumber: string;

  /** Tipo de movimiento */
  type: TransactionType;

  /** Monto de la transacción */
  amount: number;

  /** Código de la moneda (ISO 4217) */
  currency: string;

  /** Franquicia de la tarjeta */
  issuer: string;

  /** Fecha de la transacción (YYYY-MM-DD) */
  date: string;
}

/**
 * Tipo de movimiento de una transacción.
 *
 * @remarks
 * Este tipo restringe los movimientos a los valores que genera faker:
 * - 'deposit'
 * - 'withdrawal'
 * - 'payment'
 * - 'invoice'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const tipo: TransactionType = 'deposit';
 * ```
 */
export type TransactionType = 'deposit' | 'withdrawal' | 'payment' | 'invoice';