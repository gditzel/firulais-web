import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';

export type ScrollRevealVariant = 'up' | 'left' | 'right' | 'zoom';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delayMs = 0;
  @Input() revealVariant: ScrollRevealVariant = 'up';
  /** Porcentaje del elemento que debe entrar al viewport (0–1). */
  @Input() threshold = 0.12;
  /** Dejar de observar tras mostrar (mejor rendimiento). */
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.showImmediately();
      return;
    }

    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'scroll-reveal');
    this.renderer.setAttribute(host, 'data-sr-variant', this.revealVariant);
    if (this.delayMs > 0) {
      this.renderer.setStyle(host, '--sr-delay', `${this.delayMs}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          this.renderer.addClass(host, 'scroll-reveal--visible');
          if (this.revealOnce) {
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: this.threshold, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private showImmediately(): void {
    const host = this.el.nativeElement;
    this.renderer.addClass(host, 'scroll-reveal');
    this.renderer.addClass(host, 'scroll-reveal--visible');
  }
}
