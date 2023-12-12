import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AppTextareaComponent } from "./app-textarea.component";
import { FormsModule } from "@angular/forms";

describe("AppTextareaComponent", () => {
  let component: AppTextareaComponent;
  let fixture: ComponentFixture<AppTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTextareaComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
