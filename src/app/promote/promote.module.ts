import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoteRoutingModule } from './promote-routing.module';
import { CampComponent } from './camp/camp.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [CampComponent, ReportsComponent],
  imports: [
    CommonModule,
    PromoteRoutingModule
  ]
})
export class PromoteModule { }
