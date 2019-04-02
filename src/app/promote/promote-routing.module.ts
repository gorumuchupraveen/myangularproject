import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CampComponent} from './camp/camp.component';
import {ReportsComponent} from './reports/reports.component';
const routes: Routes = [
  {path: 'camp', component : CampComponent},
  {path : 'reports' , component : ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoteRoutingModule { }
