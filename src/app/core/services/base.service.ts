import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IProducts } from '../models/iproducts';

//le dice que lo injecta en el root de la app

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  urlBase: string = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  //metodo que me retorna una url
  getUrlBase(): string {
    //  console.log('URLBASE:', this.urlBase);
    return this.urlBase;
  }

  // Método que permite modificar la URL base (si es necesario)
  setBaseUrl(url: string): void {
    this.urlBase = url;
  }

  //metodo generico que puede recibir cualquier ruta
  getArrayCustomUrl<T>(name: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUrlBase()}/${name}`);
  }

  getCustomUrl<T>(name: string): Observable<T> {
    return this.http.get<T>(`${this.getUrlBase()}/${name}`);
  }
}
