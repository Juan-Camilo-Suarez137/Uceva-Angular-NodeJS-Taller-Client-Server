# Documentación del Server-NodeJS

## 1. Descripción general

El proyecto `Server-NodeJS` es una API REST desarrollada con Node.js, Express y TypeScript. Su objetivo es generar datos ficticios para ser consumidos por el cliente Angular.

Los datos se generan dinámicamente utilizando [Faker](https://fakerjs.dev/), por lo que las respuestas pueden cambiar en cada petición.

Los servicios documentados en este archivo son:

- `Transactions`: genera transacciones bancarias.
- `Repositorio`: genera repositorios de código.
- `Commits`: genera commits de un repositorio.

## 2. Requisitos

- Node.js
- npm
- TypeScript
- Acceso a una terminal

## 3. Instalación y ejecución

Desde la carpeta `Server-NodeJS`, instala las dependencias:

```bash
npm install
```

El servidor requiere la variable de entorno `PORT`. También puede configurarse `PUBLIC_PATH` para definir la carpeta de archivos públicos.

Ejemplo de archivo `.env`:

```env
PORT=3000
PUBLIC_PATH=public
```

Inicia el servidor en modo desarrollo con:

```bash
npm run start
```

La dirección base de la API será:

```text
http://localhost:3000
```

> El puerto puede cambiar si se define otro valor en `PORT`.

## 4. Documentación Swagger

La documentación interactiva está disponible en:

```text
http://localhost:3000/api/docs
```

Desde Swagger UI se pueden consultar los endpoints, sus parámetros, respuestas y esquemas de datos.

## 5. Estructura de los servicios

Cada módulo sigue una estructura similar:

```text
src/
├── domain/
│   └── interfaces/
└── presentation/
    └── modules/
        └── nombre-modulo/
            ├── nombre.controller.ts
            ├── nombre.routes.ts
            └── nombre.service.ts
```

- **Interface:** define la estructura de los datos.
- **Service:** genera o procesa la información.
- **Controller:** recibe la petición HTTP y devuelve la respuesta.
- **Routes:** registra el endpoint y su documentación OpenAPI.

## 6. Servicio de Transactions

### Endpoint

```http
GET /api/transactions/{countTransactions}
```

### Parámetro

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `countTransactions` | integer | Sí | Cantidad de transacciones que se generarán. |

### Ejemplo de consulta

```http
GET http://localhost:3000/api/transactions/2
```

### Respuesta exitosa

Código HTTP: `201 Created`

```json
[
  {
    "id": 1,
    "accountName": "Personal Loan Account",
    "accountNumber": "****2584",
    "type": "payment",
    "amount": 617.87,
    "currency": "USD",
    "issuer": "visa",
    "date": "2026-09-20"
  }
]
```

### Campos de Transaction

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | number | Identificador único. |
| `accountName` | string | Nombre de la cuenta. |
| `accountNumber` | string | Número de cuenta enmascarado. |
| `type` | string | Tipo de movimiento: `deposit`, `withdrawal`, `payment` o `invoice`. |
| `amount` | number | Valor de la transacción. |
| `currency` | string | Código de moneda. |
| `issuer` | string | Franquicia de la tarjeta. |
| `date` | string | Fecha en formato `YYYY-MM-DD`. |

### Respuesta de error

Si `countTransactions` no es un entero mayor que cero, el controlador responde con código `400`:

```json
{
  "error": "La cantidad de transacciones debe ser un entero mayor que cero"
}
```

## 7. Servicio de Repositorio

### Endpoint

```http
GET /api/repositorios/{countRepositorios}
```

### Parámetro

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `countRepositorios` | integer | Sí | Cantidad de repositorios que se generarán. Debe ser mayor que cero. |

### Ejemplo de consulta

```http
GET http://localhost:3000/api/repositorios/2
```

### Respuesta exitosa

Código HTTP: `201 Created`

```json
[
  {
    "id": 1,
    "nombre": "proyecto-ejemplo",
    "propietario": "usuario-ejemplo",
    "lenguajePrincipal": "Typescript",
    "estrellas": 120,
    "forks": 25,
    "fechaCreacion": "2024-01-15T00:00:00.000Z",
    "descripcion": "Repositorio de ejemplo",
    "visibilidad": "Público"
  }
]
```

### Campos de Repositorio

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | number | Identificador único. |
| `nombre` | string | Nombre del repositorio. |
| `propietario` | string | Usuario u organización propietaria. |
| `lenguajePrincipal` | string | `Java`, `Javascript`, `Typescript`, `Python`, `C++` o `Ruby`. |
| `estrellas` | number | Cantidad de estrellas. |
| `forks` | number | Cantidad de bifurcaciones. |
| `fechaCreacion` | string | Fecha en formato ISO 8601. |
| `descripcion` | string | Descripción del repositorio. |
| `visibilidad` | string | `Público` o `Privado`. |

### Respuesta de error

Si la cantidad no es un entero mayor que cero, el controlador responde con código `400`:

```json
{
  "error": "La cantidad de repositorios debe ser un entero mayor que cero"
}
```

## 8. Servicio de Commits

### Endpoint

```http
GET /api/commits/{countCommits}
```

### Parámetro

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---:|---|
| `countCommits` | integer | Sí | Cantidad de commits que se generarán. Debe ser mayor que cero. |

### Ejemplo de consulta

```http
GET http://localhost:3000/api/commits/2
```

### Respuesta exitosa

Código HTTP: `201 Created`

```json
[
  {
    "id": 1,
    "hash": "a1b2c3d",
    "mensaje": "agregar validación de formulario",
    "tipo": "feat",
    "autor": "usuario-ejemplo",
    "rama": "develop",
    "fecha": "2024-01-15T00:00:00.000Z",
    "archivosModificados": 3,
    "lineasAgregadas": 45,
    "lineasEliminadas": 12
  }
]
```

### Campos de Commit

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | number | Identificador único. |
| `hash` | string | Hash corto del commit. |
| `mensaje` | string | Mensaje descriptivo. |
| `tipo` | string | `feat`, `fix`, `refactor`, `docs`, `test`, `chore` o `style`. |
| `autor` | string | Usuario que realizó el commit. |
| `rama` | string | Rama donde se realizó el commit. |
| `fecha` | string | Fecha en formato ISO 8601. |
| `archivosModificados` | number | Cantidad de archivos modificados. |
| `lineasAgregadas` | number | Cantidad de líneas agregadas. |
| `lineasEliminadas` | number | Cantidad de líneas eliminadas. |

### Respuesta de error

Si la cantidad no es un entero mayor que cero, el controlador responde con código `400`:

```json
{
  "error": "La cantidad de commits debe ser un entero mayor que cero"
}
```

## 9. Pruebas manuales

Con el servidor en ejecución, los endpoints pueden probarse desde el navegador, Postman o PowerShell.

### PowerShell

```powershell
Invoke-RestMethod http://localhost:3000/api/transactions/2
Invoke-RestMethod http://localhost:3000/api/repositorios/2
Invoke-RestMethod http://localhost:3000/api/commits/2
```

### Valores inválidos

```http
GET http://localhost:3000/api/transactions/0
GET http://localhost:3000/api/transactions/-1
GET http://localhost:3000/api/repositorios/0
GET http://localhost:3000/api/repositorios/-1
GET http://localhost:3000/api/commits/abc
GET http://localhost:3000/api/commits/0
```

Estos valores deben producir una respuesta `400` en los tres servicios documentados.

## 10. Resumen de endpoints

| Servicio | Método | Endpoint | Respuesta exitosa |
|---|---|---|---|
| Transactions | GET | `/api/transactions/{countTransactions}` | `201 Created` |
| Repositorio | GET | `/api/repositorios/{countRepositorios}` | `201 Created` |
| Commits | GET | `/api/commits/{countCommits}` | `201 Created` |
