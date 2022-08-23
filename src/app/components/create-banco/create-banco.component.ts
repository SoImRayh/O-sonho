import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BancosService } from 'src/app/bancos/bancos.service';
import {Banco} from "../../bancos/model/Banco";

@Component({
  selector: 'app-create-banco',
  templateUrl: './create-banco.component.html',
  styleUrls: ['./create-banco.component.css']
})
export class CreateBancoComponent implements OnInit {

  form: FormGroup;

  public banco : Banco = new Banco();

  constructor(private formBuilder: FormBuilder,
    private bancoService: BancosService,
    private route : ActivatedRoute,
    private router : Router,
    private snackBar: MatSnackBar) {
      this.form = this.formBuilder.group({
        nome:[null],
        numero:[null]
      });
  }

  ngOnInit(): void {
  }

  savebanco(){

    this.bancoService.create(this.banco).subscribe( data => {
      this.goToBancoList();
    })

  }

  goToBancoList(){
    this.router.navigate(['/bancos']);
  }

  onSubmit(){
    console.log(this.form.value);
    this.bancoService.create(this.form.value)
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

}
