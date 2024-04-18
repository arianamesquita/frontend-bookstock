import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContainersRoutingModule } from './containers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainersRoutingModule,
    SharedModule
  ]
})
export class ContainersModule { }
