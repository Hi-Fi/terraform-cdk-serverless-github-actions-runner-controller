# Actions Runner Controller (ARC) on Elastic Container Service (ECS)

> [!WARNING]  
> This is currently PoC level thing for module publishing. Not ready for production or any use

## Usage

```hcl
module "arc_on_aca" {
  source = "Hi-Fi/serverless-github-actions-runner-controller/cdk//modules/elastic-container-service"
}
```
<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.96.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.96.0 |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_cloudwatch_log_group.aws_AutoscalerLogGroup_BFE58053](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/cloudwatch_log_group) | resource |
| [aws_cloudwatch_log_group.aws_RunnerLogGroup_711756A6](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/cloudwatch_log_group) | resource |
| [aws_ecs_cluster.aws_Cluster_BA268616](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/ecs_cluster) | resource |
| [aws_ecs_service.aws_AutoscalerService_C7C3AA3C](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/ecs_service) | resource |
| [aws_ecs_task_definition.aws_AutoscalerTaskDefinition_24A76F67](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/ecs_task_definition) | resource |
| [aws_ecs_task_definition.aws_RunnerTaskDefinition_9C7563BE](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/ecs_task_definition) | resource |
| [aws_efs_file_system.aws_efs_B3BBB350](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/efs_file_system) | resource |
| [aws_efs_file_system.aws_externalsEfs_C15353C9](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/efs_file_system) | resource |
| [aws_efs_mount_target.aws_EfsMountTarget_B2BDD3E5](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/efs_mount_target) | resource |
| [aws_efs_mount_target.aws_ExternalsEfsMountTarget_2D9AE418](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/efs_mount_target) | resource |
| [aws_iam_policy.aws_AutoscalerPolicy_FF16A997](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_policy) | resource |
| [aws_iam_policy.aws_RunnerPolicy_7B21DB81](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_policy) | resource |
| [aws_iam_role.aws_AutoscalerRole_CEB26423](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_role) | resource |
| [aws_iam_role.aws_RunnerRole_75263C23](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_role) | resource |
| [aws_iam_role.aws_TaskExecutionRole_FAB64402](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_role) | resource |
| [aws_iam_role_policy_attachment.aws_AutoscalerPolicyAttachment_5402A0C0](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.aws_RunnerPolicyAttachment_A293771C](https://registry.terraform.io/providers/aws/5.96.0/docs/resources/iam_role_policy_attachment) | resource |
| [aws_caller_identity.aws_Identity_FDC445BF](https://registry.terraform.io/providers/aws/5.96.0/docs/data-sources/caller_identity) | data source |
| [aws_region.aws_Region_7477CA06](https://registry.terraform.io/providers/aws/5.96.0/docs/data-sources/region) | data source |
| [aws_security_groups.aws_SecurityGroups_BAABB08D](https://registry.terraform.io/providers/aws/5.96.0/docs/data-sources/security_groups) | data source |
| [aws_subnets.aws_Subnets_75E5377D](https://registry.terraform.io/providers/aws/5.96.0/docs/data-sources/subnets) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_aws_PAT_4017AC3F"></a> [aws\_PAT\_4017AC3F](#input\_aws\_PAT\_4017AC3F) | Github PAT with Actions:Read and Admin:Read+Write scopes | `any` | n/a | yes |
| <a name="input_aws_github_config_url_BFDD14B2"></a> [aws\_github\_config\_url\_BFDD14B2](#input\_aws\_github\_config\_url\_BFDD14B2) | Github URL where runners should register to. Format https://<GitHub host>/<your\_enterprise/org/repo> | `any` | n/a | yes |

## Outputs

No outputs.
<!-- END_TF_DOCS -->