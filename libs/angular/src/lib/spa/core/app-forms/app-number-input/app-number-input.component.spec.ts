import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppNumberInputComponent } from "./app-number-input.component";
import { FormsModule } from "@angular/forms";

describe("AppNumberInputComponent", () => {
  let component: AppNumberInputComponent;
  let fixture: ComponentFixture<AppNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppNumberInputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
