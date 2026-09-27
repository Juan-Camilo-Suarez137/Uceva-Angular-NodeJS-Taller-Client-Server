import { Router } from 'express';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

/**
 * Rutas del recurso Transactions.
 */
export class TransactionsRoutes {
  /** Router con las rutas de Transactions */
  static get routes(): Router {
    const router = Router();
    const transactionsService = new TransactionsService();
    const transactionsController = new TransactionsController(transactionsService);

    /**
     * @openapi
     * /api/transactions/{countTransactions}:
     *   get:
     *     tags:
     *       - Transactions
     *     summary: Genera transacciones bancarias aleatorias
     *     parameters:
     *       - in: path
     *         name: countTransactions
     *         required: true
     *         description: Cantidad de transacciones a generar
     *         schema:
     *           type: integer
     *           minimum: 1
     *     responses:
     *       201:
     *         description: Lista de transacciones
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Transaction'
    *       400:
    *         description: Parámetro inválido; debe ser un entero mayor que cero
     */
    router.get('/:countTransactions', transactionsController.getTransactions);

    return router;
  }
}