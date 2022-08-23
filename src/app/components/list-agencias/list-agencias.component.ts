import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BancosService } from 'src/app/bancos/bancos.service';
import { Banco } from 'src/app/bancos/model/Banco';
import { UtilsService } from 'src/app/utils/utils.service';

import { Agencia } from '../../agencias/model/Agencia';
import { AgenciaService } from '../../agencias/service/agencia.service';

@Component({
  selector: 'app-list-agencias',
  templateUrl: './list-agencias.component.html',
  styleUrls: ['./list-agencias.component.css']
})
export class ListAgenciasComponent implements OnInit {

  bancos$: Observable<Banco[]>;
  agencias$: Observable<Agencia[]>;
  public agencias : Agencia[] = []
  dataSource: any;
  empdata:any;
  banco: string = '';


  displayedColumns = ['id','nome_agencia','agencia','endereco','banco_id','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private agenciaService: AgenciaService,
    private router : Router,
    private agenciasService: AgenciaService,
    private bancoService: BancosService) {
    this.agencias$ = this.agenciasService.getAll();
    this.bancos$ = this.bancoService.getAll();
   }

  ngOnInit(): void {
    this.buscarTodos();
  }

  public buscarTodos(){
    this.agenciasService.getAll()
    .subscribe(result =>{
        this.empdata = result;

        this.dataSource= new MatTableDataSource<Agencia>(this.empdata);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    )
    // .subscribe( data => {
    //   console.log(data);
    //   this.banco = data;
    //   this.nome = data.nome;
    //   this.numero = data.numero ;
    // }, error => console.log(error));
  }

  getBanco(banco_id: number){
      this.bancoService.getbancoById(banco_id)
      .subscribe(result =>{
        console.log(result.nome)
          return result.nome
        }
      )
  }

  onUpdate(id : number){
    this.router.navigate(['/agencias/update',id]);
  }

  onDetails(id:number){
    this.router.navigate(['/agencias',id])
  }

  onDelete(id: number) {
    this.agenciaService.delete(id).subscribe(data => {
      this.agenciaService.getAll().subscribe(
        (response: Agencia[])=>
        this.agencias = response)
    },error => console.log(error));

  }

  onAdd() {
    this.router.navigate(['/agencias/novo']);
  }

  Filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue;
  }

}
