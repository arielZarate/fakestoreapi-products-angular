import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from '../../../../core/config/darkThemeService';

@Component({
  selector: 'app-switcher-button',
  standalone: true,
  imports: [],
  templateUrl: './switcher-button.component.html',
  // styleUrl: './switcher-button.component.css',
})
export class SwitcherButtonComponent implements OnInit {
  isDarkModeActive: boolean = false; // Estado inicial
  constructor(private darkThemeService: DarkThemeService) {}
  ngOnInit(): void {
    this.darkThemeService.initializeTheme();
    // Consulta si está activado el modo oscuro para reflejar el estado inicial en el button
    this.isDarkModeActive = this.darkThemeService.isDarkMode();
  }

  toggleDarkMode = (): void => {
    //  document.documentElement.classList.toggle('dark');
    this.darkThemeService.toggleDarkMode();
    // Actualiza el estado local después de alternar el modo
    this.isDarkModeActive = this.darkThemeService.isDarkMode();
  };
}
