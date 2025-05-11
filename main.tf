locals {
  is_ecs = upper(var.runner_platform) == "ECS" ? 1: 0
  is_aca = upper(var.runner_platform) == "ACA" ? 1: 0
  is_cr = upper(var.runner_platform) == "GCR" ? 1: 0
}

module "ecs" {
    count = local.is_ecs
    source = "./modules/elastic-container-service"
    personal_access_token = var.personal_access_token
    github_config_url = var.github_config_url
    ecs_cluster_name = var.ecs_cluster_name
    ecs_security_group_filters = var.ecs_security_group_filters
    ecs_subnet_filters = var.ecs_subnet_filters
}

module "aca" {
  count = local.is_aca
  source = "./modules/azure-container-apps"
  personal_access_token = var.personal_access_token
  github_config_url = var.github_config_url
}

module "gcr" {
  count = local.is_cr
  source = "./modules/google-cloud-run"
  personal_access_token = var.personal_access_token
  github_config_url = var.github_config_url
}
