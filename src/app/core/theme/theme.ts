import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';

type ThemeMode = 'light' | 'dark';

interface ThemePreferences {
  mode: ThemeMode;
  brightness: number;
}

const STORAGE_KEY = 'angular-learning-theme';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly modeState = signal<ThemeMode>('light');
  private readonly brightnessState = signal(50);

  readonly mode = this.modeState.asReadonly();
  readonly brightness = this.brightnessState.asReadonly();
  readonly isDark = computed(() => this.mode() === 'dark');

  constructor() {
    if (this.isBrowser) {
      this.restore();
      this.apply();
    }
  }

  toggle(): void {
    this.modeState.update(mode => mode === 'light' ? 'dark' : 'light');
    this.commit();
  }

  setBrightness(value: number): void {
    if (!Number.isFinite(value)) {
      return;
    }

    this.brightnessState.set(
      Math.min(100, Math.max(0, Math.round(value))),
    );

    this.commit();
  }

  resetBrightness(): void {
    this.setBrightness(50);
  }

  private restore(): void {
    const window = this.document.defaultView;

    if (!window) {
      return;
    }

    this.modeState.set(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    );

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return;
      }

      const saved: unknown = JSON.parse(raw);

      if (typeof saved !== 'object' || saved === null) {
        return;
      }

      const preferences = saved as Partial<ThemePreferences>;

      if (preferences.mode === 'light' || preferences.mode === 'dark') {
        this.modeState.set(preferences.mode);
      }

      if (
        typeof preferences.brightness === 'number' &&
        Number.isFinite(preferences.brightness)
      ) {
        this.brightnessState.set(
          Math.min(100, Math.max(0, preferences.brightness)),
        );
      }
    } catch {
      // Theme still works if browser storage is unavailable.
    }
  }

  private commit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.apply();

    try {
      this.document.defaultView?.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          mode: this.mode(),
          brightness: this.brightness(),
        } satisfies ThemePreferences),
      );
    } catch {
      // Keep the current session's preferences in memory.
    }
  }

  private apply(): void {
    const root = this.document.documentElement;
    const dark = this.isDark();
    const brightness = this.brightness();

    // Light: background 92–100%. Dark: background 5–15%.
    const base = dark
      ? 5 + brightness * 0.1
      : 92 + brightness * 0.08;

    const variables: Record<string, string> = {
      '--bg': `hsl(220  ${dark ? 25 : 30}% ${base}%)`,
      '--surface': `hsl(220 25% ${
        dark ? base + 5 : Math.min(100, base + 3)
      }%)`,
      '--surface-raised': `hsl(220 25% ${
        dark ? base + 9 : base - 2
      }%)`,
      '--border': `hsl(220 18% ${dark ? base + 17 : base - 10}%)`,
      '--text': dark ? '#f1f5fb' : '#172033',
      '--muted': dark ? '#bac6da' : '#58677e',
      '--primary': dark ? '#c4b5fd' : '#4338ca',
      '--primary-contrast': dark ? '#211344' : '#ffffff',
      '--primary-soft': dark ? '#30264e' : '#eeecff',
      '--shadow': dark
        ? '0 16px 48px rgb(0 0 0 / 18%)'
        : '0 16px 48px rgb(15 23 42 / 6%)',
    };

    root.style.colorScheme = this.mode();
    root.setAttribute('data-theme', this.mode());

    for (const [name, value] of Object.entries(variables)) {
      root.style.setProperty(name, value);
    }
  }
}
