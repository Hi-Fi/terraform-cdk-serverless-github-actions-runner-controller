import { GithubCredentials } from "projen/lib/github";
import { NodePackageManager } from "projen/lib/javascript";
import {
  HybridModule,
  publishToRegistries,
} from "projen-cdktf-hybrid-construct";

const project = new HybridModule({
  author: "Hi-Fi",
  authorAddress: "juho.saarinen@gmail.com",
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.NPM,
  devDeps: ["projen-cdktf-hybrid-construct", "@aws-sdk/client-ecs"],
  license: "MIT",
  jsiiVersion: "~5.8.0",
  constructVersion: "10.4.2",
  name: "terraform-cdk-serverless-github-actions-runner-controller",
  projenrcTs: true,
  projenCredentials: GithubCredentials.fromPersonalAccessToken({
    secret: "GITHUB_TOKEN",
  }),
  repositoryUrl:
    "https://github.com/Hi-Fi/terraform-cdk-serverless-github-actions-runner-controller.git",
  peerDeps: [
    "@cdktf/provider-azurerm",
    "@cdktf/provider-random",
    "@cdktf/provider-aws",
    "@cdktf/provider-google",
    "@cdktf/provider-null",
  ],
  ...publishToRegistries({
    name: "serverless-github-actions-runner-controller",
    namespace: "hi-fi",
    registries: ["npm"],
  }),

  // cdktfVersion: "0.20.0",        /* Minimum target version of this library. */
  // constructExamples: undefined,  /* If set a construct examples folder will be created. */
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
  // terraformExamples: undefined,  /* If set a terraform examples folder will be created. */
});

project.github?.actions.set(
  "hashicorp/setup-terraform",
  "hashicorp/setup-terraform@v3",
);

project.synth();
