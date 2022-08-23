import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteBancoComponent } from '../components/delete-banco/delete-banco.component';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    DeleteBancoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MaterialModule
  ]
})
export class BancosModule { }
