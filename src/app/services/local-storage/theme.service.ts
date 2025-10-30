import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type ThemeMode = 'light' | 'dark';
type ThemeColor = 'blue' | 'pink' | 'green' | 'orange' | 'purple';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private readonly COLOR_KEY = 'app-color';
  private mode: ThemeMode = 'light';
  private color: ThemeColor = 'blue';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
    }
  }

  private initializeTheme() {
    const savedMode = localStorage.getItem(this.THEME_KEY) as ThemeMode | null;
    const savedColor = localStorage.getItem(
      this.COLOR_KEY
    ) as ThemeColor | null;

    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this.mode = savedMode || (systemPrefersDark ? 'dark' : 'light');
    this.color = savedColor || 'blue';

    this.applyTheme(this.color, this.mode);
  }

  private applyTheme(color: ThemeColor, mode: ThemeMode) {
    if (!isPlatformBrowser(this.platformId)) return;

    const html = document.documentElement;
    html.className = '';
    html.classList.add(`theme-${color}`);
    html.classList.add(mode);

    localStorage.setItem(this.THEME_KEY, mode);
    localStorage.setItem(this.COLOR_KEY, color);
  }

  toggleMode() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.mode = this.mode === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.color, this.mode);
  }

  setColor(color: ThemeColor) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.color = color;
    this.applyTheme(this.color, this.mode);
  }

  get currentTheme() {
    return { color: this.color, mode: this.mode };
  }
}
