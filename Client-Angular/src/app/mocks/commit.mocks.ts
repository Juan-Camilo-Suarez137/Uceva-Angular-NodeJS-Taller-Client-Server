import { Commit } from '../interfaces/commit.interface';

/** Commits de ejemplo para las pruebas unitarias. */
export const COMMITS_MOCK: Commit[] = [
  {
    id: 1,
    hash: 'a1b2c3d',
    mensaje: 'agregar vista de commits',
    tipo: 'feat',
    autor: 'usuario-ejemplo',
    rama: 'feature/commit',
    fecha: new Date('2024-01-15'),
    archivosModificados: 4,
    lineasAgregadas: 120,
    lineasEliminadas: 8,
  },
  {
    id: 2,
    hash: 'e4f5g6h',
    mensaje: 'corregir validación del endpoint',
    tipo: 'fix',
    autor: 'equipo-desarrollo',
    rama: 'develop',
    fecha: new Date('2024-02-20'),
    archivosModificados: 2,
    lineasAgregadas: 18,
    lineasEliminadas: 10,
  },
  {
    id: 3,
    hash: 'i7j8k9l',
    mensaje: 'documentar el servicio de commits',
    tipo: 'docs',
    autor: 'comunidad-tech',
    rama: 'main',
    fecha: new Date('2024-03-05'),
    archivosModificados: 1,
    lineasAgregadas: 35,
    lineasEliminadas: 2,
  },
];
