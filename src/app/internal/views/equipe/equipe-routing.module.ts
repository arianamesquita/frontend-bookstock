import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaEquipeComponent } from './containers/tela-equipe.component';

const routes: Routes = [
  { path: '', component: TelaEquipeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
