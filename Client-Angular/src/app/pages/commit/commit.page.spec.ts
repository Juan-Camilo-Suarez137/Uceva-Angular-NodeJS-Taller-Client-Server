import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEVER, of, throwError } from 'rxjs';
import { CommitService } from '../../services/commit/commit.service';
import { COMMITS_MOCK } from '../../mocks/commit.mocks';
import { CommitPage } from './commit.page';

describe('CommitPage', () => {
  let component: CommitPage;
  let fixture: ComponentFixture<CommitPage>;
  let consoleErrorSpy: jest.SpyInstance;
  const commitServiceMock = {
    getAllCommits: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitPage],
      providers: [{ provide: CommitService, useValue: commitServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CommitPage);
    component = fixture.componentInstance;
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    jest.clearAllMocks();
  });

  it('debería mostrar el estado de carga mientras obtiene commits', () => {
    commitServiceMock.getAllCommits.mockReturnValue(NEVER);
    fixture.detectChanges();

    expect(commitServiceMock.getAllCommits).toHaveBeenCalledWith(10);
    expect(component.state).toBe('loading');
    expect(fixture.nativeElement.textContent).toContain('Cargando commits...');
  });

  it('debería mostrar los commits cuando la petición es exitosa', () => {
    commitServiceMock.getAllCommits.mockReturnValue(of(COMMITS_MOCK));
    fixture.detectChanges();

    expect(commitServiceMock.getAllCommits).toHaveBeenCalledWith(10);
    expect(component.state).toBe('success');
    expect(component.commits).toEqual(COMMITS_MOCK);
    expect(fixture.nativeElement.textContent).toContain('agregar vista de commits');
  });

  it('debería mostrar el estado de error si falla la petición', () => {
    commitServiceMock.getAllCommits.mockReturnValue(
      throwError(() => new Error('error')),
    );
    fixture.detectChanges();

    expect(commitServiceMock.getAllCommits).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
    expect(fixture.nativeElement.textContent).toContain('Error al cargar los commits');
  });
});
