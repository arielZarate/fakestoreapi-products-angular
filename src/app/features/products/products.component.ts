import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import DetailComponent from './detail/detail.component';
import { BaseService } from '../../core/services/base.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export default class ProductsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  //productsService = inject(BaseService);
  products: any[]|null =null;//// Inicializado como null para manejar loading state.
  constructor(private productsService: BaseService) {}

  // Inyección correcta del servicio
  //constructor(private baseService: baseService) {}
  ngOnInit(): void {
    this.subscription.add(
      this.productsService.getProducts().subscribe(
        (data: any) => {
          // Asignamos los productos a la propiedad products
          this.products = data;
          // console.log('************products*******\n', this.products);
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
