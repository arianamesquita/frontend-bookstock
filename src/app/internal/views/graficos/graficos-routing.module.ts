import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaGraficosComponent } from './containers/tela-graficos.component';

const routes: Routes = [
  { path: '', component: TelaGraficosComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
