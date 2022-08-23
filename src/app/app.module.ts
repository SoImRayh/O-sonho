import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbancosComponent } from './components/listbancos/listbancos.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { CreateBancoComponent } from './components/create-banco/create-banco.component';
import { FormsModule } from "@angular/forms";
import { UpdateBancoComponent } from './components/update-banco/update-banco.component';
import { GetBancoComponent } from './components/get-banco/get-banco.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ListAgenciasComponent} from "./components/list-agencias/list-agencias.component";
import {CreateAgenciasComponent} from "./components/create-agencias/create-agencias.component";
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import { MaterialModule } from './material-module';
import { DeleteAgenciaComponent } from './components/delete-agencia/delete-agencia.component';
import { DestalhesAgenciaComponent } from './components/destalhes-agencia/destalhes-agencia.component';
import { UpdateAgenciaComponent } from './components/update-agencia/update-agencia.component';


@NgModule({
  declarations: [
    AppComponent,
    ListbancosComponent,
    CreateBancoComponent,
    UpdateBancoComponent,
    GetBancoComponent,
    ListAgenciasComponent,
    CreateAgenciasComponent,
    DestalhesAgenciaComponent,
    UpdateAgenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
