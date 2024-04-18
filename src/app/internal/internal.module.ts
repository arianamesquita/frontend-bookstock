import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternalRoutingModule } from './internal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TelaAberturaModule } from './views/tela-abertura/tela-abertura.module';
import { MainScreenComponent } from './views/containers/main-screen/main-screen.component';


@NgModule({
  declarations: [
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InternalRoutingModule,
    TelaAberturaModule
  ],
  exports: [
    TelaAberturaModule
  ]
})
export class InternalModule { }
