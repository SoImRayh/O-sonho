import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAgenciasComponent } from './components/create-agencias/create-agencias.component';
import { CreateBancoComponent } from './components/create-banco/create-banco.component';
import { DeleteAgenciaComponent } from './components/delete-agencia/delete-agencia.component';
import { DeleteBancoComponent } from './components/delete-banco/delete-banco.component';
import { DestalhesAgenciaComponent } from './components/destalhes-agencia/destalhes-agencia.component';
import { GetBancoComponent } from './components/get-banco/get-banco.component';
import { ListAgenciasComponent } from './components/list-agencias/list-agencias.component';
import { ListbancosComponent } from './components/listbancos/listbancos.component';
import { RemessasComponent } from './components/remessas/remessas.component';
import { UpdateAgenciaComponent } from './components/update-agencia/update-agencia.component';
import { UpdateBancoComponent } from './components/update-banco/update-banco.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'bancos' },
  {path: 'bancos', component:ListbancosComponent},
  {path: 'bancos/novo', component: CreateBancoComponent},
  {path: 'bancos/update/:id', component: UpdateBancoComponent},
  {path: 'bancos/:id', component: GetBancoComponent},
  {path: 'bancos/delete/:id', component: DeleteBancoComponent},

  {path: 'agencias', component: ListAgenciasComponent},
  {path: 'agencias/novo', component: CreateAgenciasComponent},
  {path: 'agencias/:id', component: DestalhesAgenciaComponent},
  {path: 'agencias/update/:id', component: UpdateAgenciaComponent},
  {path: 'agencias/delete/:id', component: DeleteAgenciaComponent},

  {path: 'remessas', component: RemessasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
