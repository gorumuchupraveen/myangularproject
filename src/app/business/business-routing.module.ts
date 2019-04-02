import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClipComponent} from './clip/clip.component';
import {SendComponent} from './send/send.component';

const routes: Routes = [
  {path : '', redirectTo : 'send', pathMatch : 'full'},
  {path:'clip', component : ClipComponent},
  {path:'send', component : SendComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
