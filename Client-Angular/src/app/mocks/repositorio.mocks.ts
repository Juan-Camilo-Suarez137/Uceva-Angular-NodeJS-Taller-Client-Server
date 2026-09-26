import { Repositorio } from '../interfaces/repositorio.interface';

/** Repositorios de ejemplo para las pruebas unitarias. */
export const REPOSITORIOS_MOCK: Repositorio[] = [
  {
    id: 1,
    nombre: 'proyecto-ejemplo',
    propietario: 'usuario-ejemplo',
    lenguajePrincipal: 'Typescript',
    estrellas: 120,
    forks: 25,
    fechaCreacion: new Date('2024-01-15'),
    descripcion: 'Repositorio de ejemplo desarrollado con Angular.',
    visibilidad: 'Público',
  },
  {
    id: 2,
    nombre: 'api-client-server',
    propietario: 'equipo-desarrollo',
    lenguajePrincipal: 'Javascript',
    estrellas: 85,
    forks: 12,
    fechaCreacion: new Date('2023-06-20'),
    descripcion: 'API para la comunicación entre cliente y servidor.',
    visibilidad: 'Privado',
  },
  {
    id: 3,
    nombre: 'data-tools',
    propietario: 'comunidad-tech',
    lenguajePrincipal: 'Python',
    estrellas: 340,
    forks: 48,
    fechaCreacion: new Date('2022-11-05'),
    descripcion: 'Herramientas para procesamiento y análisis de datos.',
    visibilidad: 'Público',
  },
];
