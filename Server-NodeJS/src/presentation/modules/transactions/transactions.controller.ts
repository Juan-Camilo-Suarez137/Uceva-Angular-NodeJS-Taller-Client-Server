import { Request, Response } from 'express';
import { TransactionsService } from './transactions.service';
import { HandleError } from '../../../domain/erros/handle.error';

/**
 * Controlador del recurso Transactions.
 */
export class TransactionsController {
  /**
   * @param transactionsService Servicio que genera las transacciones
   */
  constructor(private readonly transactionsService: TransactionsService) {}

  /**
   * Responde con la cantidad de transacciones indicada en la URL.
   */
  getTransactions = (req: Request, res: Response) => {
    try {
      const count = Number(req.params['countTransactions']);

      if (!Number.isInteger(count) || count < 1) {
        res.status(400).json({
          error: 'La cantidad de transacciones debe ser un entero mayor que cero',
        });
        return;
      }

      const transactions = this.transactionsService.getTransactions(count);
      res.status(201).json(transactions);
    } catch (error) {
      HandleError.error(error, res);
    }
  };
}