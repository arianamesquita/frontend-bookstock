import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrateleirasRoutingModule } from './prateleiras-routing.module';
import { TelaPrateleiraComponent } from './containers/tela-prateleira.component';


@NgModule({
  declarations: [
    TelaPrateleiraComponent
  ],
  imports: [
    CommonModule,
    PrateleirasRoutingModule
  ]
})
export class PrateleirasModule { }
