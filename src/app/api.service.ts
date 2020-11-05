import { Injectable } from '@angular/core';
import { Produit } from './models/produit';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

      public getProducts () : Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.backendProduit);
      }

      public getProductById(id:number) : Observable<Produit> {
        return this.getProducts().pipe(map(product => product.find(product => product.id == id)));
      }
}
