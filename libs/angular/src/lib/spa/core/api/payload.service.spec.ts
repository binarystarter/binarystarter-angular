import { TestBed } from "@angular/core/testing";

import { PayloadService } from "./payload.service";

describe("PayloadService", () => {
  let service: PayloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayloadService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
