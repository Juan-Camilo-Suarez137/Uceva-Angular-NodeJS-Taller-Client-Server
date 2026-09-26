import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Commit } from '../../interfaces/commit.interface';
import { COMMITS_MOCK } from '../../mocks/commit.mocks';
import { CommitService } from './commit.service';

describe('CommitService', () => {
  let service: CommitService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CommitService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar commits', () => {
    const countCommits = 3;
    const mockCommits: Commit[] = COMMITS_MOCK;

    service.getAllCommits(countCommits).subscribe((commits) => {
      expect(commits).toEqual(mockCommits);
      expect(commits.length).toBe(mockCommits.length);
    });

    const request = httpMock.expectOne(`api/commits/${countCommits}`);
    expect(request.request.method).toBe('GET');

    request.flush(mockCommits);
  });

  it('debería propagar un error si la petición HTTP falla', () => {
    const countCommits = 3;

    service.getAllCommits(countCommits).subscribe({
      next: () => fail('No debería emitir datos cuando ocurre un error'),
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const request = httpMock.expectOne(`api/commits/${countCommits}`);

    request.flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' },
    );
  });
});
