import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TransactionsService } from './transactions.service';
import { MOCK_TRANSACTIONS } from '../../mocks/transactions.mocks';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(TransactionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request the transactions with GET', () => {
    service.getAllTransactions(5).subscribe((transactions) => {
      expect(transactions).toEqual(MOCK_TRANSACTIONS);
    });

    const req = httpMock.expectOne('api/transactions/5');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_TRANSACTIONS);
  });
});