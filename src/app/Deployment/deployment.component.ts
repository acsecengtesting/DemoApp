import {Component} from '@angular/core';
import {Deployment} from "../Models/deployment"

@Component({
  selector: 'deployment',
  templateUrl: './deployment.component.html'
})

export class DeploymentComponent{
  Deployments:Array<Deployment>;
  constructor() {
    this.Deployments = new Array<Deployment>();
    this.Deployments.push(new Deployment("foo","abc123", "Creating"));
    this.Deployments.push(new Deployment("bar","abc123","Deleting"));
    this.Deployments.push(new Deployment("baz","abc123"));
  }
}
