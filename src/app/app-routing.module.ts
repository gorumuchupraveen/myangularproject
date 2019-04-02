import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DashboardModule} from './dashboard/dashboard.module';
import{BusinessModule} from './business/business.module';
import {PromoteModule} from './promote/promote.module';


const routes: Routes = [
  {path :'business', loadChildren: './business/business.module#BusinessModule'},
  {path: 'promote', loadChildren: './promote/promote.module#PromoteModule' },
 { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashboardModule' }
//  { path : 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),DashboardModule,BusinessModule,PromoteModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
