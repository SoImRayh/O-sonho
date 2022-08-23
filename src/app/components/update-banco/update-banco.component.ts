import { ActivatedRoute, Route, Router } from '@angular/router';
import { BancosService } from 'src/app/bancos/bancos.service';
import { Banco } from './../../bancos/model/Banco';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-banco',
  templateUrl: './update-banco.component.html',
  styleUrls: ['./update-banco.component.css']
})
export class UpdateBancoComponent implements OnInit {

  id: number = 0 ;
  nome : string =''
  numero : string = '';
  banco : Banco = new Banco();
  updated : Banco = new Banco();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private bancoService : BancosService,
    private route : ActivatedRoute,
    private router : Router,
    private snackBar: MatSnackBar) {
      this.form = this.formBuilder.group({
        nome:[this.nome],
        numero:[this.numero]
      });}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.bancoService.getbancoById(this.id).subscribe( data => {
        this.banco = data;
        this.nome = data.nome;
        this.numero = data.numero ;
      }, error => console.log(error));
  }

  public onSubmit(){
    this.updated.id = this.banco.id
    this.bancoService.update(this.id , this.updated)
    .subscribe(data=>{this.onSucces()}, error => {this.onError()})
  }

  onCancel(){
    this.router.navigate(['bancos'])
  }

  private onSucces(){
    this.snackBar.open('Banco salvo com sucesso','',{duration:5000});
    this.onCancel;
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Banco','',{duration:5000});
  }

  getBancoDetails(){
    return{
      nome: "",
      numero:""
    }
  }

}
