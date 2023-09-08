import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBaseComponent } from './account-base.component';

describe('AccountBaseComponent', () => {
  let component: AccountBaseComponent;
  let fixture: ComponentFixture<AccountBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
