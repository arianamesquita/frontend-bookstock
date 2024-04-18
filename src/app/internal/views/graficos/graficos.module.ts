import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { TelaGraficosComponent } from './containers/tela-graficos.component';


@NgModule({
  declarations: [
    TelaGraficosComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ]
})
export class GraficosModule { }
