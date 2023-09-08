import { TestBed } from "@angular/core/testing";

import { ApiEndpointsService } from "./api-endpoints.service";

describe("ApiEndpointsService", () => {
  let service: ApiEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEndpointsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
