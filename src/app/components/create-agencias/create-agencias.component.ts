import { AgenciaService } from './../../agencias/service/agencia.service';
import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/agencias/model/Agencia';
import {Utils} from "../../utils/utils";
import {UtilsService} from "../../utils/utils.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-agencias',
  templateUrl: './create-agencias.component.html',
  styleUrls: ['./create-agencias.component.css']
})
export class CreateAgenciasComponent implements OnInit {

  form: FormGroup;
  readonly utilfiltro = 'telefone';

  public utils: Utils[] = [] ;
  public agencia : Agencia = new Agencia()

  constructor(private utilsService: UtilsService,
    private formBuilder: FormBuilder,
    private AgenciaService: AgenciaService,
    private route : ActivatedRoute,
    private router : Router,
    private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome_agencia:[null],
      agencia:[null],
      fone:[null],
      banco_id:[null],
      endereco:[null],
      tipo:[null],
      fone1:[null],
      tipo1:[null]
    });
   }

  ngOnInit(): void {
    this.utilsService.getByTipo(this.utilfiltro).subscribe(
      (response :Utils[]) => {
        this.utils = response;
      }
    )
  }
  savebanco(){
    this.AgenciaService.save(this.agencia).subscribe( data => {
      console.log(data);
      this.goToAgenciaList();
    })
  }

  goToAgenciaList(){
    this.router.navigate(['agencias']);
  }

  onSubmit(){
    console.log(this.form.value);
    this.AgenciaService.save(this.form.value)
    .subscribe(data=>{this.onSucces()}, error => {this.onError()})
  }

  onCancel(){
    this.router.navigate(['agencias'])
  }

  private onSucces(){
    this.snackBar.open('Agencia salva com sucesso','',{duration:5000});
    this.onCancel;
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Agencia','',{duration:5000});
  }
}
