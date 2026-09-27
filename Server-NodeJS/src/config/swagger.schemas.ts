/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Repositorio:
 *       type: object
 *       description: Representa un repositorio de código
 *       required:
 *         - id
 *         - nombre
 *         - propietario
 *         - lenguajePrincipal
 *         - estrellas
 *         - forks
 *         - fechaCreacion
 *         - descripcion
 *         - visibilidad
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: proyecto-ejemplo
 *         propietario:
 *           type: string
 *           example: usuario-ejemplo
 *         lenguajePrincipal:
 *           type: string
 *           enum:
 *             - Java
 *             - Javascript
 *             - Typescript
 *             - Python
 *             - C++
 *             - Ruby
 *           example: Typescript
 *         estrellas:
 *           type: number
 *           example: 120
 *         forks:
 *           type: number
 *           example: 25
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           example: 2024-01-15T00:00:00.000Z
 *         descripcion:
 *           type: string
 *           example: Repositorio de ejemplo
 *         visibilidad:
 *           type: string
 *           enum:
 *             - Público
 *             - Privado
 *           example: Público
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Commit:
 *       type: object
 *       description: Representa un commit realizado en un repositorio
 *       required:
 *         - id
 *         - hash
 *         - mensaje
 *         - tipo
 *         - autor
 *         - rama
 *         - fecha
 *         - archivosModificados
 *         - lineasAgregadas
 *         - lineasEliminadas
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         hash:
 *           type: string
 *           example: a1b2c3d
 *         mensaje:
 *           type: string
 *           example: agregar validación de formulario
 *         tipo:
 *           type: string
 *           enum:
 *             - feat
 *             - fix
 *             - refactor
 *             - docs
 *             - test
 *             - chore
 *             - style
 *           example: feat
 *         autor:
 *           type: string
 *           example: usuario-ejemplo
 *         rama:
 *           type: string
 *           example: develop
 *         fecha:
 *           type: string
 *           format: date-time
 *           example: 2024-01-15T00:00:00.000Z
 *         archivosModificados:
 *           type: number
 *           example: 3
 *         lineasAgregadas:
 *           type: number
 *           example: 45
 *         lineasEliminadas:
 *           type: number
 *           example: 12
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       description: Representa una transacción bancaria generada con faker.finance
 *       required:
 *         - id
 *         - accountName
 *         - accountNumber
 *         - type
 *         - amount
 *         - currency
 *         - issuer
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         accountName:
 *           type: string
 *           example: Personal Loan Account
 *         accountNumber:
 *           type: string
 *           example: "****2584"
 *         type:
 *           type: string
 *           enum:
 *             - deposit
 *             - withdrawal
 *             - payment
 *             - invoice
 *           example: payment
 *         amount:
 *           type: number
 *           example: 617.87
 *         currency:
 *           type: string
 *           example: USD
 *         issuer:
 *           type: string
 *           example: visa
 *         date:
 *           type: string
 *           format: date
 *           example: 2026-09-20
 */
export {};