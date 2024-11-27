import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductService } from './products.service';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CardComponent,LoaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export default class ProductsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  //productsService = inject(BaseService);
  products: any[]|null =null;//// Inicializado como null para manejar loading state.
  constructor(private productsService: ProductService) {}

  // Inyección correcta del servicio
  //constructor(private baseService: baseService) {}
  ngOnInit(): void {
    this.subscription.add(
      this.productsService.getProducts().subscribe(
        (data: any) => {
          // Asignamos los productos a la propiedad products
         setTimeout(() => {
          this.products = data;
         }, 2000);
          //console.log('************products*******\n', this.products);
        },

        (error: Error) => {
          // Manejo de errores (si es necesario)
          console.error('Error al obtener productos:', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
