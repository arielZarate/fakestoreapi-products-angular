import { Component } from '@angular/core';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
