import { Transaction } from '../interfaces/transactions.interface';

/** Transacciones de ejemplo para las pruebas */
export const MOCK_TRANSACTIONS: Transaction[] = [
  { 
    id: 1,
    accountName: 'Personal Loan Account',
    accountNumber: '****2584',
    type: 'payment',
    amount: 617.87,
    currency: 'USD',
    issuer: 'visa',
    date: '2026-09-20'
 },
  {
    id: 2,
    accountName: 'Savings Account',
    accountNumber: '****9187',
    type: 'deposit',
     amount: 1500,
    currency: 'EUR',
    issuer: 'mastercard',
    date: '2026-09-18'
     },
];