import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpParams} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Utils} from "./utils";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  readonly urlApi = environment.urlAPI.concat('/utils');
  constructor(private http:HttpClient) { }

  public getUtil(id: number): Observable<Utils> {
    return this.http.get<Utils>(`${this.urlApi}/${id}`)
  }
  public getByTipo(tipo: string):Observable<Utils[]> {
  const params = new HttpParams().set('tipo', tipo)

  return this.http.get<Utils[]>(`${this.urlApi}`,{params})
  }
}
