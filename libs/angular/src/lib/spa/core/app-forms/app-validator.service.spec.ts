import { TestBed } from "@angular/core/testing";

import { AppValidatorService } from "./app-validator.service";
import { FormsModule } from "@angular/forms";

describe("AppValidatorService", () => {
  let service: AppValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
    });
    service = TestBed.inject(AppValidatorService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
