import { TestBed } from "@angular/core/testing";

import { AuthorizationInterceptor } from "./authorization.interceptor";

describe("HttpInterceptorInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthorizationInterceptor],
    }),
  );

  it("should be created", () => {
    const interceptor: AuthorizationInterceptor = TestBed.inject(AuthorizationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
