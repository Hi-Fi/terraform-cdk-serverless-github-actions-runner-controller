# Actions Runner Controller (ARC) on Azure Container Apps (ACA)

> [!WARNING]  
> This is currently PoC level thing for module publishing. Not ready for production or any use

## Usage

```hcl
module "arc_on_aca" {
  source = "Hi-Fi/serverless-github-actions-runner-controller/cdk//modules/azure-container-apps"
}
```
<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_azapi"></a> [azapi](#requirement\_azapi) | 2.3.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | 4.39.0 |
| <a name="requirement_random"></a> [random](#requirement\_random) | 3.7.2 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_azapi"></a> [azapi](#provider\_azapi) | 2.3.0 |
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | 4.39.0 |
| <a name="provider_random"></a> [random](#provider\_random) | 3.7.2 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [azapi_resource.aca_acaenv_BB928F0D](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_autoscalerCache_3C1251ED](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_externalsShare_D334CAD4](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_ghaRunnerJob_816ABB0D](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_runnerCache_2C48ECD2](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_storageAccount_C1F07B26](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azapi_resource.aca_storageShare_5702AE2C](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/resources/resource) | resource |
| [azurerm_container_app.aca_autoscalerApp_63FADD45](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/container_app) | resource |
| [azurerm_container_app_environment_storage.aca_acaenvstorage_23C615A5](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/container_app_environment_storage) | resource |
| [azurerm_container_app_environment_storage.aca_acaexternalstorage_B8141EC0](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/container_app_environment_storage) | resource |
| [azurerm_container_registry.aca_acr_DEECF884](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/container_registry) | resource |
| [azurerm_log_analytics_workspace.aca_log_B150D83C](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/log_analytics_workspace) | resource |
| [azurerm_resource_group.aca_rg_AD6EB8ED](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/resource_group) | resource |
| [azurerm_role_assignment.aca_actionContainerStartRoleAssignment_941E620A](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_assignment) | resource |
| [azurerm_role_assignment.aca_imagePushRoleAssignment_8F2241FD](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_assignment) | resource |
| [azurerm_role_assignment.aca_jobLogReadAssignment_E0C92A22](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_assignment) | resource |
| [azurerm_role_assignment.aca_roleAssignment_A6BA6095](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_assignment) | resource |
| [azurerm_role_assignment.aca_scaleJobRoleAssignment_5738140A](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_assignment) | resource |
| [azurerm_role_definition.aca_jobCreationRole_9EFE12E7](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_definition) | resource |
| [azurerm_role_definition.aca_jobRole_21145D6F](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/role_definition) | resource |
| [azurerm_user_assigned_identity.aca_identity_9571D28D](https://registry.terraform.io/providers/azurerm/4.39.0/docs/resources/user_assigned_identity) | resource |
| [random_string.aca_randomSuffix_B2CE1226](https://registry.terraform.io/providers/hashicorp/random/3.7.2/docs/resources/string) | resource |
| [azapi_resource_action.aca_storageAccessKeys_4F266A39](https://registry.terraform.io/providers/azure/azapi/2.3.0/docs/data-sources/resource_action) | data source |
| [azurerm_subscription.aca_sub_C75A43F0](https://registry.terraform.io/providers/azurerm/4.39.0/docs/data-sources/subscription) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aca_location_486B7D73"></a> [aca\_location\_486B7D73](#input\_aca\_location\_486B7D73) | Location where to provision resources to | `string` | `"westeurope"` | no |
| <a name="input_autoscaler_image"></a> [autoscaler\_image](#input\_autoscaler\_image) | Autoscaler image triggering runners | `string` | `"ghcr.io/hi-fi/gha-runners-on-managed-env:ebe559da0d51e04eff903f0a04de09da93f4614f"` | no |
| <a name="input_github_config_url"></a> [github\_config\_url](#input\_github\_config\_url) | Github URL where runners should register to. Format https://<GitHub host>/<your\_enterprise/org/repo> | `any` | n/a | yes |
| <a name="input_personal_access_token"></a> [personal\_access\_token](#input\_personal\_access\_token) | Github PAT with Actions:Read and Admin:Read+Write scopes | `any` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->