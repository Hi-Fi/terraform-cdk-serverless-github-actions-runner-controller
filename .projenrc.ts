import { Vitest } from '@nikovirtala/projen-vitest'
import { Biome } from 'projen-biome'
import {
  HybridModule,
  publishToRegistries,
} from 'projen-cdktf-hybrid-construct'
import { GithubCredentials } from 'projen/lib/github'
import { NodePackageManager } from 'projen/lib/javascript'
const project = new HybridModule({
  author: 'Hi-Fi',
  authorAddress: 'juho.saarinen@gmail.com',
  defaultReleaseBranch: 'main',
  packageManager: NodePackageManager.NPM,
  devDeps: [
    'projen-cdktf-hybrid-construct',
    '@aws-sdk/client-ecs',
    '@nikovirtala/projen-vitest',
    'projen-biome',
  ],
  license: 'MIT',
  jsiiVersion: '~5.8.0',
  constructVersion: '10.4.2',
  name: 'terraform-cdk-serverless-github-actions-runner-controller',
  projenrcTs: true,
  projenCredentials: GithubCredentials.fromPersonalAccessToken({
    secret: 'GITHUB_TOKEN',
  }),
  depsUpgradeOptions: {
    workflow: false,
  },
  renovatebot: true,
  renovatebotOptions: {
    overrideConfig: {
      lockFileMaintenance: { enabled: true },
    },
  },
  repositoryUrl:
    'https://github.com/Hi-Fi/terraform-cdk-serverless-github-actions-runner-controller.git',
  peerDeps: [
    '@cdktf/provider-azurerm',
    '@cdktf/provider-random',
    '@cdktf/provider-aws',
    '@cdktf/provider-google',
    '@cdktf/provider-null',
  ],
  ...publishToRegistries({
    name: 'serverless-github-actions-runner-controller',
    namespace: 'hi-fi',
    registries: ['npm'],
  }),
  // use Vitest instead
  jest: false,
  // use Biome instead
  eslint: false,
  prettier: false,
  testdir: 'tests',
  // cdktfVersion: "0.20.0",        /* Minimum target version of this library. */
  // constructExamples: undefined,  /* If set a construct examples folder will be created. */
  // deps: [],                      /* Runtime dependencies of this module. */
  // description: undefined,        /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,        /* The "name" in package.json. */
  // terraformExamples: undefined,  /* If set a terraform examples folder will be created. */
})

project.github?.actions.set(
  'hashicorp/setup-terraform',
  'hashicorp/setup-terraform@v3',
)

new Vitest(project)
new Biome(project, {
  formatter: true,
  linter: true,
  organizeImports: true,
})

// Update actions

project.github?.actions.set(
  'actions/upload-artifact',
  'actions/upload-artifact@v4.6.2',
)

project.github?.actions.set(
  'amannn/action-semantic-pull-request',
  'amannn/action-semantic-pull-request@v5.5.3',
)

project.synth()
