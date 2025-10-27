import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'app-theme';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme =
        (localStorage.getItem(this.themeKey) as 'light' | 'dark') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light');
      this.setTheme(savedTheme);
    }
  }

  setTheme(theme: 'light' | 'dark') {
    if (!isPlatformBrowser(this.platformId)) return;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(this.themeKey, theme);
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    const current = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  get currentTheme() {
    if (!isPlatformBrowser(this.platformId)) return 'light';
    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  }
}
