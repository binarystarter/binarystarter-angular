import { TestBed } from "@angular/core/testing";
import { HttpErrorHandlingInterceptor } from "./http.interceptor";

describe("HttpInterceptorInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpErrorHandlingInterceptor],
    }),
  );

  it("should be created", () => {
    const interceptor: HttpErrorHandlingInterceptor = TestBed.inject(HttpErrorHandlingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
