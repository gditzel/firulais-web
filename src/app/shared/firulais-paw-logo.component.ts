import { Component, Input } from '@angular/core';

/** Huella tipo marca Firulais (4 dedos + almohadilla), vector nítido. */
@Component({
  selector: 'app-firulais-paw-logo',
  standalone: true,
  template: `
    <svg
      [attr.class]="svgClass"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="12" cy="16.75" rx="6.85" ry="5.7" />
      <circle cx="6.35" cy="9.15" r="2.92" />
      <circle cx="11.35" cy="6.05" r="3.08" />
      <circle cx="16.35" cy="9.15" r="2.92" />
      <circle cx="18.85" cy="13.05" r="2.42" />
    </svg>
  `,
})
export class FirulaisPawLogoComponent {
  /** Clases Tailwind de tamaño, ej. h-6 w-6 */
  @Input() iconClass = 'h-6 w-6';

  get svgClass(): string {
    return `block shrink-0 ${this.iconClass}`;
  }
}
