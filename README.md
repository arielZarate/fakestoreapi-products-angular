# Proyecto de Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Estructura basica

```ts

├── app/
│   ├── core/
│   ├── features/
│   ├── shared/
│   ├── otra/
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── environments/
├── styles/
└── main.ts

```

## Iconos

de Angular Icons

```ts
npm install @ng-icons/core @ng-icons/heroicons

```

luego se importa en el componente principal o el que vyamos a usar

```ts
import { NgIcon, provideIcons } from "@ng-icons/core";
import { featherAirplay } from "@ng-icons/feather-icons";
import { heroUsers } from "@ng-icons/heroicons/outline";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [NgIcon],
  viewProviders: [provideIcons({ featherAirplay, heroUsers })],
})
export class AppComponent {}
```

y en el htmll

```ts
<ng-icon name="heroUsers" />
```

## DarkMode con localStorage

cree un service para el darknode qye se gestiona con de forma automatica

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DarkThemeService {
  private readonly theme = "darkMode";

  // Inicializar el tema
  initializeTheme(): void {
    const darkMode = localStorage.getItem(this.theme);
    if (darkMode === "dark") {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  // Habilitar modo oscuro
  enableDarkMode(): void {
    document.documentElement.classList.add("dark");
    localStorage.setItem(this.theme, "dark");
  }

  // Deshabilitar modo claro
  disableDarkMode(): void {
    document.documentElement.classList.remove("dark");
    localStorage.setItem(this.theme, "light");
  }

  // Alternar entre modos
  toggleDarkMode(): void {
    if (document.documentElement.classList.contains("dark")) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }
  // Consultar el estado actual del modo oscuro
  isDarkMode(): boolean {
    return document.documentElement.classList.contains("dark");
  }
}
```

y en el componenteSwitcher-button

```ts
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


// y en el html del switcher

<div class="flex items-center">
  <label class="relative cursor-pointer">
    <input type="checkbox" class="sr-only peer" [checked]="isDarkModeActive" />
    <div
      (click)="toggleDarkMode()"
      class="w-12 h-7 flex items-center bg-gray-300 rounded-full text-[9px] peer-checked:text-green-950 text-gray-800 font-extrabold after:flex after:items-center after:justify-center peer after:content-['Light'] peer-checked:after:content-['Dark'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-700 transform duration-1000 ease-in-out"
    ></div>
  </label>
</div>



```
