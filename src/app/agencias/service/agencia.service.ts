import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, first, Observable} from "rxjs";
import {Agencia} from "../model/Agencia";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  readonly urlApi = environment.urlAPI.concat('/agencias')
  constructor(private http:HttpClient) { }

  public getAll(): Observable<Agencia[]> {
    return this.http.get<Agencia[]>(`${this.urlApi}`)
    .pipe(
      first(),
      delay(1000)
    );
  }
  public getOne(id : number):Observable<Agencia> {
    return this.http.get<Agencia>(`${this.urlApi}/${id}`)
  }

  public save(agencia: Agencia): Observable<Agencia> {
    return this.http.post<Agencia>(`${this.urlApi}`,agencia);
  }

  public update(id: number , agencia: Agencia) : Observable<Agencia> {
    return this.http.put<Agencia>(`${this.urlApi}/${id}`, agencia)
  }

  public delete(id :number) :Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/delete/${id}`)
  }
}
