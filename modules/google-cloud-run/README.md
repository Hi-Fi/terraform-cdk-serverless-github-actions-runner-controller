# Actions Runner Controller (ARC) on Google Cloud Run

> [!WARNING]  
> This is currently PoC level thing for module publishing. Not ready for production or any use

## Usage

```hcl
module "arc_on_aca" {
  source = "Hi-Fi/serverless-github-actions-runner-controller/cdk//modules/google-cloud-run"
}
```
<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_google"></a> [google](#requirement\_google) | 6.44.0 |
| <a name="requirement_null"></a> [null](#requirement\_null) | 3.2.4 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | 6.44.0 |
| <a name="provider_null"></a> [null](#provider\_null) | 3.2.4 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [google_artifact_registry_repository.cr_registry_886F88F0](https://registry.terraform.io/providers/google/6.44.0/docs/resources/artifact_registry_repository) | resource |
| [google_cloud_run_service.cr_autoscalerService_A4FAA2B6](https://registry.terraform.io/providers/google/6.44.0/docs/resources/cloud_run_service) | resource |
| [google_cloud_run_v2_job.cr_ghaJob_3BDFC08A](https://registry.terraform.io/providers/google/6.44.0/docs/resources/cloud_run_v2_job) | resource |
| [google_project_iam_custom_role.cr_autoscalerRole_8A950337](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_custom_role) | resource |
| [google_project_iam_custom_role.cr_runnerRole_07508BC4](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_custom_role) | resource |
| [google_project_iam_member.cr_autoscalerRoleBindingRunServiceAgent_83C78179](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_autoscalerRoleBindingRun_76E1E813](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_autoscalerRoleBindingStorage_C1A676AA](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_runnerRoleBindingRunServiceAgent_88652FB8](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_runnerRoleBindingRunViewer_328C548F](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_runnerRoleBindingStorage_8D8C3B87](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_project_iam_member.cr_runnerRoleBinding_E20193A5](https://registry.terraform.io/providers/google/6.44.0/docs/resources/project_iam_member) | resource |
| [google_service_account.cr_autoscalerServiceAccount_37C5FFAD](https://registry.terraform.io/providers/google/6.44.0/docs/resources/service_account) | resource |
| [google_service_account.cr_jobServiceAccount_4D2CB679](https://registry.terraform.io/providers/google/6.44.0/docs/resources/service_account) | resource |
| [null_resource.cr_gcloud_3D7A726F](https://registry.terraform.io/providers/null/3.2.4/docs/resources/resource) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_autoscaler_image"></a> [autoscaler\_image](#input\_autoscaler\_image) | Autoscaler image triggering runners | `string` | `"ghcr.io/hi-fi/gha-runners-on-managed-env:ebe559da0d51e04eff903f0a04de09da93f4614f"` | no |
| <a name="input_github_config_url"></a> [github\_config\_url](#input\_github\_config\_url) | Github URL where runners should register to. Format https://<GitHub host>/<your\_enterprise/org/repo> | `any` | n/a | yes |
| <a name="input_personal_access_token"></a> [personal\_access\_token](#input\_personal\_access\_token) | Github PAT with Actions:Read and Admin:Read+Write scopes | `any` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->