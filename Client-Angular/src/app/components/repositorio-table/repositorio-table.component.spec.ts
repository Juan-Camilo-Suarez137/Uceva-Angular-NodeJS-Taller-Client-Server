import { ComponentFixture, TestBed } from '@angular/core/testing';
import { REPOSITORIOS_MOCK } from '../../mocks/repositorio.mocks';
import { RepositorioTableComponent } from './repositorio-table.component';

describe('RepositorioTableComponent', () => {
  let component: RepositorioTableComponent;
  let fixture: ComponentFixture<RepositorioTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorioTableComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse correctamente', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada repositorio', () => {
    component.repositorios = REPOSITORIOS_MOCK;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(REPOSITORIOS_MOCK.length);
  });

  it('debería mostrar los datos de los repositorios', () => {
    component.repositorios = REPOSITORIOS_MOCK;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain('proyecto-ejemplo');
    expect(text).toContain('usuario-ejemplo');
    expect(text).toContain('Typescript');
    expect(text).toContain('Público');
    expect(text).toContain('api-client-server');
    expect(text).toContain('Privado');
  });

  it('debería mapear correctamente los lenguajes principales', () => {
    expect(component.categoryMap.Java).toBe('danger');
    expect(component.categoryMap.Javascript).toBe('warning');
    expect(component.categoryMap.Typescript).toBe('primary');
    expect(component.categoryMap.Python).toBe('success');
    expect(component.categoryMap['C++']).toBe('dark');
    expect(component.categoryMap.Ruby).toBe('secondary');
  });

  it('debería mapear correctamente la visibilidad', () => {
    expect(component.visibilityMap['Público']).toBe('success');
    expect(component.visibilityMap['Privado']).toBe('dark');
  });
});
