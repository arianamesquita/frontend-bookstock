import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPedidoComponent } from './containers/tela-pedido.component';

const routes: Routes = [
  { path: '', component: TelaPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
