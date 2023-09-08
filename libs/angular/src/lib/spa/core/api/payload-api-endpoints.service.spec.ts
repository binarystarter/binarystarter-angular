import { TestBed } from "@angular/core/testing";

import { PayloadApiEndpointsService } from "./payload-api-endpoints.service";

describe("PayloadApiEndpointsService", () => {
  let service: PayloadApiEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayloadApiEndpointsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
