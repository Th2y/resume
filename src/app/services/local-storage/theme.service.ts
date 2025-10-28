import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'app-theme';
  private theme: Theme = 'light';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.themeKey) as Theme | null;
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      this.applyTheme(this.theme);
    }
  }

  private applyTheme(theme: Theme) {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(this.themeKey, theme);
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.theme);
  }

  get currentTheme(): Theme {
    if (!isPlatformBrowser(this.platformId)) return 'light';
    return this.theme;
  }
}
