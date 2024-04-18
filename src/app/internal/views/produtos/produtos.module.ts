import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { TelaProdutosComponent } from './containers/tela-produtos.component';


@NgModule({
  declarations: [
    TelaProdutosComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  exports: [
    TelaProdutosComponent,
  ],
})
export class ProdutosModule { }
