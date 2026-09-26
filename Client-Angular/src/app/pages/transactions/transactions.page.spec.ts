import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { TransactionsPage } from './transactions.page';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { MOCK_TRANSACTIONS } from '../../mocks/transactions.mocks';

describe('TransactionsPage', () => {
  let component: TransactionsPage;
  let fixture: ComponentFixture<TransactionsPage>;
  const transactionsServiceMock = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsPage],
      providers: [{ provide: TransactionsService, useValue: transactionsServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsPage);
    component = fixture.componentInstance;
  });

  afterEach(() => jest.clearAllMocks());

  it('should load transactions and set state to success', () => {
    transactionsServiceMock.getAll.mockReturnValue(of(MOCK_TRANSACTIONS));
    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.transactions).toEqual(MOCK_TRANSACTIONS);
  });

  it('should set state to error when the service fails', () => {
    transactionsServiceMock.getAll.mockReturnValue(throwError(() => new Error('error')));
    fixture.detectChanges();

    expect(component.state).toBe('error');
  });
});