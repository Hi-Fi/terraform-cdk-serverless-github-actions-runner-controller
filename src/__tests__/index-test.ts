import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { Azure } from "../lib/azure";
import { Gcp } from "../lib/gcp";
import { Aws } from "../lib/aws";

// To learn more about testing see cdk.tf/testing
describe("Should synthesize snapshot for construct", () => {
  it("Azure", () => {
    expect(
      Testing.synthScope((scope) => {
        new Azure(scope, "azure");
      })
    ).toMatchSnapshot();
  });

  it("Aws", () => {
    expect(
      Testing.synthScope((scope) => {
        new Aws(scope, "aws", {
          clusterName: 'test-cluster',
          containerSupport: false
        });
      })
    ).toMatchSnapshot();
  });

  it("Google", () => {
    expect(
      Testing.synthScope((scope) => {
        new Gcp(scope, "google");
      })
    ).toMatchSnapshot();
  });
});