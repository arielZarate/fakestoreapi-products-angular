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
