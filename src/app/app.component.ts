import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';

import { FirulaisPawLogoComponent } from './shared/firulais-paw-logo.component';
import { ScrollRevealDirective } from './shared/scroll-reveal.directive';

@Component({
  selector: 'app-root',
  imports: [ScrollRevealDirective, FirulaisPawLogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly title = 'Firulais';
  readonly year = new Date().getFullYear();
  private readonly storageKey = 'firulais-theme';
  readonly darkMode = signal(false);

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    const root = this.document.documentElement;
    const stored = localStorage.getItem(this.storageKey);
    const prefersDark = globalThis.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (stored === 'dark' || (stored !== 'light' && prefersDark)) {
      this.renderer.addClass(root, 'dark');
    } else {
      this.renderer.removeClass(root, 'dark');
    }
    this.darkMode.set(root.classList.contains('dark'));
  }

  toggleTheme(): void {
    const root = this.document.documentElement;
    if (root.classList.contains('dark')) {
      this.renderer.removeClass(root, 'dark');
      localStorage.setItem(this.storageKey, 'light');
    } else {
      this.renderer.addClass(root, 'dark');
      localStorage.setItem(this.storageKey, 'dark');
    }
    this.darkMode.set(root.classList.contains('dark'));
  }
}
