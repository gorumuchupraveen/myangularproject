import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { ClipComponent } from './clip/clip.component';
import { SendComponent } from './send/send.component';
@NgModule({
  declarations: [ClipComponent, SendComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
