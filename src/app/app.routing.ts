import { RouterModule, Routes, CanActivate, RouterLinkActive} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnComponent } from './en/en.component';

import { AuthGuard } from './auth.guard';
// ROUTING
const routesConfig: Routes = [
    { path: '', component: DashboardComponent},
    { path: ':en', component: EnComponent}
    
  ]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: true,
})