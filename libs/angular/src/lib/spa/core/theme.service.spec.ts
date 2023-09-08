import { TestBed } from "@angular/core/testing";

import { ThemeService } from "./theme.service";

describe("ThemeServiceService", () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
