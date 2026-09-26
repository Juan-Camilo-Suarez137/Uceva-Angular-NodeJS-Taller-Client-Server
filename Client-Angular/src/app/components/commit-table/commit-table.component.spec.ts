import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMMITS_MOCK } from '../../mocks/commit.mocks';
import { CommitTableComponent } from './commit-table.component';

describe('CommitTableComponent', () => {
  let component: CommitTableComponent;
  let fixture: ComponentFixture<CommitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommitTableComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse correctamente', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada commit', () => {
    component.commits = COMMITS_MOCK;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(COMMITS_MOCK.length);
  });

  it('debería mostrar los datos de los commits', () => {
    component.commits = COMMITS_MOCK;
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent;

    expect(text).toContain('a1b2c3d');
    expect(text).toContain('agregar vista de commits');
    expect(text).toContain('feat');
    expect(text).toContain('usuario-ejemplo');
    expect(text).toContain('feature/commit');
  });

  it('debería mapear correctamente los tipos de commit', () => {
    expect(component.categoryMap.feat).toBe('primary');
    expect(component.categoryMap.fix).toBe('danger');
    expect(component.categoryMap.refactor).toBe('warning');
    expect(component.categoryMap.docs).toBe('dark');
    expect(component.categoryMap.test).toBe('success');
    expect(component.categoryMap.chore).toBe('secondary');
    expect(component.categoryMap.style).toBe('primary');
  });
});
