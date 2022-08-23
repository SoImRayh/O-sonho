import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Banco } from "./model/Banco"
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class BancosService {
  readonly urlApi = environment.urlAPI

  constructor(private http: HttpClient) { }

  public getAll():Observable<Banco[]> {
    return this.http.get<Banco[]>(`${this.urlApi}/bancos`);
  }

  public getbancoById(id :number):Observable<Banco> {
    return this.http.get<Banco>(`${this.urlApi}/bancos/${id}`);
  }

  public create(banco: Banco):Observable<Banco>{
    return this.http.post<Banco>(`${this.urlApi}/bancos`,banco);
  }

  public update ( id: number, banco : Banco) : Observable<Banco> {
    return this.http.put<Banco>(`${this.urlApi}/bancos/edit/${banco.id}`,banco)
  }

  public delete( id:number ): Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/bancos/delete/${id}`);
  }
}
