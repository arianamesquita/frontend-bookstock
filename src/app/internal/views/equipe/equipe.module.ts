import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { TelaEquipeComponent } from './containers/tela-equipe.component';


@NgModule({
  declarations: [
    TelaEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule
  ]
})
export class EquipeModule { }
