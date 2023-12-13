import { TestBed } from '@angular/core/testing';
import { AngularAppService } from './angular-app.service';

describe('AngularAppService', () => {
  let service: AngularAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
