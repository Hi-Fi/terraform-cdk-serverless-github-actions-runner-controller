locals {
  is_ecs = upper(var.runner_platform) == "ECS" ? 1: 0
  is_aca = upper(var.runner_platform) == "ACA" ? 1: 0
  is_cr = upper(var.runner_platform) == "GCR" ? 1: 0
}

module "ecs" {
    count = local.is_ecs
    source = "./modules/elastic-container-service"
    PAT = var.PAT
    github_config_url = var.github_config_url
}

module "aca" {
  count = local.is_aca
  source = "./modules/azure-container-apps"
  PAT = var.PAT
  github_config_url = var.github_config_url
}

module "gcr" {
  count = local.is_cr
  source = "./modules/google-cloud-run"
  PAT = var.PAT
  github_config_url = var.github_config_url
}
