import { DeleteAgenciaComponent } from './../components/delete-agencia/delete-agencia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    DeleteAgenciaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule
  ]
})
export class AgenciasModule { }
