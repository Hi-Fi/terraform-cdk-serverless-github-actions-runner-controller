import { NodePackageManager } from "projen/lib/javascript";
import {
  HybridModule,
  publishToRegistries,
} from "projen-cdktf-hybrid-construct";

const project = new HybridModule({
  author: "Juho Saarinen",
  authorAddress: "juho.saarinen@gmail.com",
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.NPM,
  devDeps: ["projen-cdktf-hybrid-construct"],
  license: "MIT",
  jsiiVersion: "~5.8.0",
  constructVersion: "10.4.2",
  name: "terraform-cdk-serverless-github-actions-runner-controller",
  projenrcTs: true,
  repositoryUrl:
    "https://github.com/juho.saarinen/terraform-cdk-serverless-github-actions-runner-controller.git",
  peerDeps: ["@cdktf/provider-azurerm", "@cdktf/provider-random"],
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

project.synth();
