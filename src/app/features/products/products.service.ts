import { Injectable } from '@angular/core';
import { BaseService } from '../../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../../core/models/iproducts';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(http: HttpClient) {
    //le paso el http del constructor del padre
    super(http);
  }

  //me devuelve todos los products
  getProducts(): Observable<IProducts[]> {
    return this.getArrayCustomUrl<IProducts>('products');
  }

  //devuelve prodcutos por id
  getProductsByid(id: number): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.getUrlBase()}/products/${id}`);
  }
}
