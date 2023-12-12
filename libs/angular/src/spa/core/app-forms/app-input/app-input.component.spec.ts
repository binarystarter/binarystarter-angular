import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppInputComponent } from "./app-input.component";
import { FormsModule } from "@angular/forms";

describe("AppInputComponent", () => {
  let component: AppInputComponent;
  let fixture: ComponentFixture<AppInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppInputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
