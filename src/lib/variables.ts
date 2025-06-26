import { TerraformVariable } from "cdktf";
import type { Construct } from "constructs";

export interface Variables {
	pat: TerraformVariable;
	githubConfigUrl: TerraformVariable;
	autoscalerImage: TerraformVariable;
}

export function commonVariables(scope: Construct): Variables {
	const pat = new TerraformVariable(scope, "personal_access_token", {
		description: "Github PAT with Actions:Read and Admin:Read+Write scopes",
		nullable: false,
		sensitive: true,
	});

	pat.overrideLogicalId("personal_access_token");

	const githubConfigUrl = new TerraformVariable(scope, "github_config_url", {
		description:
			"Github URL where runners should register to. Format https://<GitHub host>/<your_enterprise/org/repo>",
		nullable: false,
	});

	githubConfigUrl.overrideLogicalId("github_config_url");

	const autoscalerImage = new TerraformVariable(scope, "autoscaler_image", {
		description: "Autoscaler image triggering runners",
		default:
			"ghcr.io/hi-fi/gha-runners-on-managed-env:ebe559da0d51e04eff903f0a04de09da93f4614f",
	});

	autoscalerImage.overrideLogicalId("autoscaler_image");

	return {
		pat,
		githubConfigUrl,
		autoscalerImage,
	};
}
