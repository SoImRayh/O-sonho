import { ActivatedRoute, Router } from '@angular/router';
import { BancosService } from 'src/app/bancos/bancos.service';
import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/bancos/model/Banco';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-banco',
  templateUrl: './get-banco.component.html',
  styleUrls: ['./get-banco.component.css']
})

export class GetBancoComponent implements OnInit {

  public banco : Banco = new Banco() ;
  public id : number = 0;

  constructor(
    private bancoService : BancosService,
    private route : ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bancoService.getbancoById(this.id).subscribe(data =>{
      this.banco = data
    },
      error => console.log(error))
  }

  goToBancos(){
    this.router.navigate(['/bancos'])
  }

  editarbanco(id: number){
    this.router.navigate(['/bancos/update', id])
  }

  onCancel(){
    this.router.navigate(['bancos'])
  }

}
