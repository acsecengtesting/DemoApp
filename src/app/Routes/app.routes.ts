import {Routes} from '@angular/router';
import { LoginComponent} from '../Login/login.component';
import { DeploymentComponent } from '../Deployment/deployment.component';
import { AuthGuard } from '../Guards/auth.guard'
export const AppRoutes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'deployment',component:DeploymentComponent,canActivate:[AuthGuard]},
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'deployment',pathMatch:'full'}
]
