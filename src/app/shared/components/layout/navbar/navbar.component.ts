import { Component } from '@angular/core';
import { SwitcherButtonComponent } from '../switcher-button/switcher-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SwitcherButtonComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  // Puedes llamar a esta función con un botón o evento
}
