# Actions Runner Controller (ARC) on Azure Container Apps (ACA)

> [!WARNING]  
> This is currently PoC level thing for module publishing. Not ready for production or any use

## Usage

```hcl
module "arc_on_aca" {
  source = "juho.saarinen/terraform-cdk-serverless-github-actions-runner-controller.git//modules/azure-container-apps"
}
```