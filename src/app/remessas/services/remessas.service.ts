import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Image } from 'src/app/_model/image.model';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RemessasService {

  readonly urlApi = environment.urlAPI.concat('/agencias')
  constructor(private http:HttpClient) { }


  public save(remessa: Image): Observable<Image> {
    return this.http.post<Image>(`${this.urlApi}`,remessa);
  }
}
