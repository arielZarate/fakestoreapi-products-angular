import { Component, Input, HostListener, OnInit } from '@angular/core';
import { IProducts } from '../../../core/models/iproducts';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, CommonModule,RouterLink],
  templateUrl: './card.component.html',
  // styleUrl: './card.component.css'
 
})
export class CardComponent implements OnInit {
  @Input() product:IProducts| null=null;
  titleLength: number =17;
 // shoppingCartIcon:any;





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

  //========tamaño de title====================
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth < 768) {
      this.titleLength = 18;
    } else {
      this.titleLength = 17;
    }
  }
  //============================================

  ngOnInit(): void {
    this.onResize(new Event('resize')); 
     // Obtener el icono del servicio
   // this.shoppingCartIcon = IconsUtil.getShoppingCartIcon();
  }
}
