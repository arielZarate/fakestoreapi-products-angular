import { Component,HostListener  } from '@angular/core';
import { SwitcherButtonComponent } from '../switcher-button/switcher-button.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SwitcherButtonComponent,RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
 // styleUrl: './navbar.component.css',
})
export class NavbarComponent {

 //=======dropdown========================================== 

isMenuOpen:boolean = false;
//=======menu================================
islogguedIn:boolean = true;  // si esta logueado hace una cosa y sino otra , debe venir del login
//=======dropdown==========================================

isDropdownOpen:boolean = false;

 // Alternar estado del menú
 toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}




toggleDropdown() {
  this.isDropdownOpen =!this.isDropdownOpen;
}
// Listener para el tamaño de la pantalla
@HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.handleScreenResize();
}
  // Detecta el tamaño de la pantalla y ajusta el estado del menú
  handleScreenResize() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 640) {
      this.isMenuOpen = false;  // Cierra el menú en pantallas grandes
    } else if (this.isMenuOpen) {
      this.isMenuOpen = true;   // Si el menú está abierto, mantenlo abierto en pantallas pequeñas
    }
  }

  // Inicializa el estado del menú en función del tamaño de la pantalla al cargar
  ngOnInit() {
    this.handleScreenResize();
  }


  // Puedes llamar a esta función con un botón o evento
}
