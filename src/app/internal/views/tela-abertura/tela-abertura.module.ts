import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaAberturaRoutingModule } from './tela-abertura-routing.module';
import { TelaAberturaComponent } from './containers/tela-abertura.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TelaAberturaComponent
  ],
  imports: [
    CommonModule,
    TelaAberturaRoutingModule,
    SharedModule
  ],
  exports: [
    TelaAberturaComponent
  ]
})
export class TelaAberturaModule { }
