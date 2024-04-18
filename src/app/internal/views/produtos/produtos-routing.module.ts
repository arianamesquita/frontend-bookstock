import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaProdutosComponent } from './containers/tela-produtos.component';

const routes: Routes = [
  { path: '', component: TelaProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
