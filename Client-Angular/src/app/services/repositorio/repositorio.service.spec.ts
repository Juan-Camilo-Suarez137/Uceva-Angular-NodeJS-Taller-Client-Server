import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Repositorio } from '../../interfaces/repositorio.interface';
import { REPOSITORIOS_MOCK } from '../../mocks/repositorio.mocks';
import { RepositorioService } from './repositorio.service';

describe('RepositorioService', () => {
  let service: RepositorioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(RepositorioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar repositorios', () => {
    const countRepositorios = 3;
    const mockRepositorios: Repositorio[] = REPOSITORIOS_MOCK;

    service.getAllRepositorios(countRepositorios).subscribe((repositorios) => {
      expect(repositorios).toEqual(mockRepositorios);
      expect(repositorios.length).toBe(mockRepositorios.length);
    });

    const request = httpMock.expectOne(`api/repositorios/${countRepositorios}`);
    expect(request.request.method).toBe('GET');

    request.flush(mockRepositorios);
  });

  it('debería propagar un error si la petición HTTP falla', () => {
    const countRepositorios = 3;

    service.getAllRepositorios(countRepositorios).subscribe({
      next: () => fail('No debería emitir datos cuando ocurre un error'),
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const request = httpMock.expectOne(`api/repositorios/${countRepositorios}`);

    request.flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' },
    );
  });
});
