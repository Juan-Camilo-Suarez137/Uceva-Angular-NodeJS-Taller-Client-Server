import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEVER, of, throwError } from 'rxjs';
import { REPOSITORIOS_MOCK } from '../../mocks/repositorio.mocks';
import { RepositorioService } from '../../services/repositorio/repositorio.service';
import { RepositorioPage } from './repositorio.page';

describe('RepositorioPage', () => {
  let component: RepositorioPage;
  let fixture: ComponentFixture<RepositorioPage>;
  const repositorioServiceMock = {
    getAllRepositorios: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioPage],
      providers: [
        { provide: RepositorioService, useValue: repositorioServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioPage);
    component = fixture.componentInstance;
  });

  afterEach(() => jest.clearAllMocks());

  it('debería mostrar el estado de carga mientras obtiene repositorios', () => {
    repositorioServiceMock.getAllRepositorios.mockReturnValue(NEVER);
    fixture.detectChanges();

    expect(repositorioServiceMock.getAllRepositorios).toHaveBeenCalledWith(10);
    expect(component.state).toBe('loading');
    expect(fixture.nativeElement.textContent).toContain('Cargando repositorios...');
  });

  it('debería mostrar los repositorios cuando la petición es exitosa', () => {
    repositorioServiceMock.getAllRepositorios.mockReturnValue(of(REPOSITORIOS_MOCK));
    fixture.detectChanges();

    expect(repositorioServiceMock.getAllRepositorios).toHaveBeenCalledWith(10);
    expect(component.state).toBe('success');
    expect(component.repositorios).toEqual(REPOSITORIOS_MOCK);
    expect(fixture.nativeElement.textContent).toContain('proyecto-ejemplo');
  });

  it('debería mostrar el estado de error si falla la petición', () => {
    repositorioServiceMock.getAllRepositorios.mockReturnValue(
      throwError(() => new Error('error')),
    );
    fixture.detectChanges();

    expect(repositorioServiceMock.getAllRepositorios).toHaveBeenCalledWith(10);
    expect(component.state).toBe('error');
    expect(fixture.nativeElement.textContent).toContain(
      'Error al cargar los repositorios',
    );
  });
});
