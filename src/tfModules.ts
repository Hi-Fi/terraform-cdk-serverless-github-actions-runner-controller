import { App } from "cdktf";
import { Construct } from "constructs";
import { TFModuleStack } from "@cdktf/tf-module-stack";
import { Azure } from "./lib/azure";

class AzureContainerAppsArc extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new Azure(this, "aca");
  }
}

const app = new App();
// This is the name the module can be found under. 
// We expect a "my-awesome-module.md" file in this directory.
// The README.md file will be generated from this file.
new AzureContainerAppsArc(app, "azure-container-apps");
app.synth();