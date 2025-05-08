import { App, DynamicListTerraformIterator, VariableType } from "cdktf";
import { Construct } from "constructs";
import { TFModuleStack, TFModuleVariable } from "@cdktf/tf-module-stack";
import { Azure } from "./lib/azure";
import { Aws } from "./lib/aws";
import { Gcp } from "./lib/gcp";

class AzureContainerAppsArc extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Azure(this, "aca");
  }
}

class ElasticContainerServiceArc extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const clusterName = new TFModuleVariable(this, 'ecs_cluster_name', {
      description: 'Name of the ECS cluster to create',
    }).stringValue

    const filterType = VariableType.list(VariableType.object({
      name: VariableType.STRING,
      values: VariableType.list(VariableType.STRING)
    }));

    const securityGroupFilters = new TFModuleVariable(this, 'ecs_security_group_filters', {
      type: filterType,
      description: 'Filters for security groups',
      default: [],
    }).value;

    const subnetFilters = new TFModuleVariable(this, 'ecs_subnet_filters', {
      type: filterType,
      description: 'Filters for security groups',
      default: [],
    }).value;

    const securityGroupFiltersIterator = DynamicListTerraformIterator.fromList(securityGroupFilters)
    const subnetFiltersIterator = DynamicListTerraformIterator.fromList(subnetFilters)
    
    new Aws(this, "aws", {
      clusterName,
      containerSupport: false,
      securityGroupFilters: securityGroupFiltersIterator.dynamic({
        name: securityGroupFiltersIterator.getString('name'),
        values: securityGroupFiltersIterator.getList('values')
      }),
      subnetFilters: subnetFiltersIterator.dynamic({
        name: subnetFiltersIterator.getString('name'),
        values: subnetFiltersIterator.getList('values')
      })
    });
  }
}

class CloudRunArc extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Gcp(this, "cr");
  }
}

const app = new App();
// This is the name the module can be found under. 
// We expect a "my-awesome-module.md" file in this directory.
// The README.md file will be generated from this file.
new AzureContainerAppsArc(app, "azure-container-apps");
new ElasticContainerServiceArc(app, "elastic-container-service");
new CloudRunArc(app, "google-cloud-run");

app.synth();