import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';
import { TransactionsPage } from './pages/transactions/transactions.page';
import { RepositorioPage } from './pages/repositorio/repositorio.page';
import { CommitPage } from './pages/commit/commit.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link RepositorioPage}
 * @see {@link CommitPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: 'transactions', component: TransactionsPage },

  /**
   * Ruta de repositorios.
   *
   * @remarks
   * Renderiza el componente `RepositorioPage`, encargado
   * de mostrar el listado de repositorios.
   */
  { path: 'repositorios', component: RepositorioPage },

  /**
   * Ruta de commits.
   *
   * @remarks
   * Renderiza el componente `CommitPage`, encargado
   * de mostrar el listado de commits.
   */
  { path: 'commits', component: CommitPage },

  { path: '**', redirectTo: 'users' },

];