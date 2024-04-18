import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrateleiraComponent } from './containers/tela-prateleira.component';

const routes: Routes = [
  { path: '', component: TelaPrateleiraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrateleirasRoutingModule { }
