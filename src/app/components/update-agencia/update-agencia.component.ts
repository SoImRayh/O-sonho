import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/agencias/model/Agencia';
import { AgenciaService } from 'src/app/agencias/service/agencia.service';
import { Utils } from 'src/app/utils/utils';
import { UtilsService } from 'src/app/utils/utils.service';

@Component({
  selector: 'app-update-agencia',
  templateUrl: './update-agencia.component.html',
  styleUrls: ['./update-agencia.component.css']
})
export class UpdateAgenciaComponent implements OnInit {

  id: number = 0 ;
  banco_id : any ;
  endereco!: string;
  fone: any ;
  tipo: any ;
  fone1: any ;
  tipo1: any ;
  agencia!: string;
  nome_agencia!: string;
  Agencia : Agencia = new Agencia();
  updated : Agencia = new Agencia();

  form: FormGroup;
  readonly utilfiltro = 'telefone';
  public utils: Utils[] = [] ;

  constructor(private formBuilder: FormBuilder,
    private AgenciaService : AgenciaService,
    private route : ActivatedRoute,
    private router : Router,
    private snackBar: MatSnackBar,
    private utilsService: UtilsService,) {
      this.form = this.formBuilder.group({
        banco_id:[this.banco_id],
        endereco: [this.endereco],
        fone: [this.fone],
        tipo: [this.tipo],
        fone1: [this.fone1],
        tipo1: [this.tipo1],
        agencia: [this.agencia],
        nome_agencia: [this.nome_agencia],
      });}

  ngOnInit(): void {
    this.utilsService.getByTipo(this.utilfiltro).subscribe(
      (response :Utils[]) => {
        this.utils = response;
      }
    );
    this.id = this.route.snapshot.params['id'] ;
    this.AgenciaService.getOne(this.id).subscribe( data => {
        this.Agencia = data;
        this.banco_id = data.banco_id;
        this.endereco = data.endereco;
        this.fone = data.fone;
        this.tipo = data.tipo;
        this.fone1 = data.fone1;
        this.tipo1 = data.tipo1;
        this.agencia = data.agencia;
        this.nome_agencia = data.nome_agencia;
      }, error => console.log(error));
  }

  public onSubmit(){
    this.updated.id = this.Agencia.id
    this.AgenciaService.update(this.id , this.updated)
    .subscribe(data=>{this.onSucces()}, error => {this.onError()})
  }

  onCancel(){
    this.router.navigate(['agencias'])
  }

  private onSucces(){
    this.snackBar.open('Agencia salvo com sucesso','',{duration:5000});
    this.onCancel;
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Agencia','',{duration:5000});
  }


}
