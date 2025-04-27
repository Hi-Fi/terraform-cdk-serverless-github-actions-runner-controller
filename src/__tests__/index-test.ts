import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { Azure } from "../lib/azure";

// To learn more about testing see cdk.tf/testing
describe("MyConstruct", () => {
  it("should synthesize", () => {
    expect(
      Testing.synthScope((scope) => {
        new Azure(scope, "my-construct");
      })
    ).toMatchSnapshot();
  });
});