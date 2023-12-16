import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppValidatorService } from '../../../../../modules/app-forms/app-validator.service';
import { AppFormsModule } from '../../../../../modules/app-forms/app-forms.module';
import { AppLayoutModule } from '../../../../../layout/layout.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFormsModule, AppLayoutModule],
      declarations: [LoginComponent],
      providers: [AppValidatorService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
