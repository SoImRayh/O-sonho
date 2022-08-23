import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { BancosService } from "../../bancos/bancos.service";
import { Banco } from "../../bancos/model/Banco";


@Component({
  selector: 'app-listbancos',
  templateUrl: './listbancos.component.html',
  styleUrls: ['./listbancos.component.css']
})
export class ListbancosComponent implements OnInit {

  //variável para iterar os bancos
  //public bancos : Banco[] = []
  bancos$: Observable<Banco[]>;
  public bancos : Banco[] = []
  dataSource: any;
  empdata:any;

  displayedColumns = ['id','nome', 'numero','actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private bancoService: BancosService,
    private router : Router,
    private bancosService: BancosService,) {
    this.bancos$ = this.bancosService.getAll();

   }

  ngOnInit(): void {
    this.buscarTodos();
  }


  public buscarTodos(){
    this.bancoService.getAll().subscribe(result =>{
        this.empdata = result;

        this.dataSource= new MatTableDataSource<Banco>(this.empdata);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      }
    )
  }

  onUpdate(id : number){
    this.router.navigate(['/bancos/update',id]);
  }

  onDetails(id:number){this.router.navigate(['/bancos',id])}
  
  onDelete(id: number) {
    this.bancoService.delete(id).subscribe(data => {
      this.bancoService.getAll().subscribe(
        (response: Banco[])=>
        this.bancos = response)
    },error => console.log(error));

  }

  onAdd() {
    this.router.navigate(['/bancos/novo']);
  }

  Filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue;
  }
}
