import { ActivatedRoute, Router } from '@angular/router';
import { Agencia } from 'src/app/agencias/model/Agencia';
import { Component, OnInit } from '@angular/core';
import { AgenciaService } from 'src/app/agencias/service/agencia.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-destalhes-agencia',
  templateUrl: './destalhes-agencia.component.html',
  styleUrls: ['./destalhes-agencia.component.css']
})
export class DestalhesAgenciaComponent implements OnInit {

  public agencia : Agencia = new Agencia() ;
  public id : number = 0;

  constructor(
    private agenciaService : AgenciaService,
    private route : ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.agenciaService.getOne(this.id).subscribe(data =>{
      this.agencia = data
    },
      error => console.log(error))
  }


  goToAgencias(){
    this.router.navigate(['/agencias'])
  }

  editaragencia(id: number){
    this.router.navigate(['/agencias/update', id])
  }

  onCancel(){
    this.router.navigate(['agencias'])
  }


}
