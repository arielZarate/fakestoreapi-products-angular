import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import { IProducts } from '../../../core/models/iproducts';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CurrencyPipe,CommonModule,LoaderComponent],
  templateUrl: './detail.component.html',
 // styleUrl: './detail.component.css',
})
export default class DetailComponent implements OnInit {
  product: IProducts | undefined = undefined;
  productId: number | null = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.productService.getProductsByid(this.productId).subscribe({
        next: (data) => {
     setTimeout(() => {
      this.product = data;
      //  console.log(this.product);
     }, 700);
        },
        error: (e) => 'Error al cargar products' + e,
      });
    }
  }





  //==========formateo de las estrellas==============
  getFullStars() {
    return Math.floor((this.product?.rating?.rate)as number);
  }

  getHalfStar() {
    return (this.product?.rating?.rate) as number % 1 >= 0.5 ? 1 : 0;
  }

  getEmptyStars() {
    return 5 - Math.ceil((this.product?.rating?.rate) as number );
  }

  //==============================================
}
