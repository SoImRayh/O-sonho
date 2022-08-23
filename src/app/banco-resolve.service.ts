// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   Resolve,
//   RouterStateSnapshot,
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { BancosService } from './bancos/bancos.service';
// import { Banco } from './bancos/model/Banco';

// @Injectable({
//   providedIn: 'root',
// })
// export class BancoResolveService implements Resolve<Banco> {
//   // banco: Banco = {
//   //   id:"",
//   //   nome: "",
//   //   numero:""
//   // }

//   constructor(private bancoServicce: BancosService) {}
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<Banco> {
//     const id: number  = (route.paramMap.get("id"));

//     if (id) {
//       return this.bancoServicce.getbancoById(id);
//     } else {
//       return of(this.getBancoDetails());
//     }
//   }

//   getBancoDetails(){
//     return{
//       nome: "",
//       numero:""
//     }
//   }
// }
