import { ObjectValuesPipe } from "./object-values.pipe";

describe("ObjectValuesPipe", () => {
  it("create an instance", () => {
    const pipe = new ObjectValuesPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform({ a: 0, b: 1 })).toEqual([0, 1]);
  });
});
