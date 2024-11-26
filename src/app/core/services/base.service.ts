import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

//le dice que lo injecta en el root de la app

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  urlBase: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //metodo que me retorna una url
  getUrlBase(): string {
    //  console.log('URLBASE:', this.urlBase);
    return this.urlBase;
  }

  //me devuelve todos los products
  getProducts(): Observable<any> {
    return this.http.get<any[]>(`${this.urlBase}/products`);
   
  }

  // Método que permite modificar la URL base (si es necesario)
  setBaseUrl(url: string): void {
    this.urlBase = url;
  }

  //metodo generico que puede recibir cualquier ruta
  getCustomUrl(url: string): Observable<any> {
    return this.http.get(`${this.getUrlBase()}/${url}`);
  }
}
