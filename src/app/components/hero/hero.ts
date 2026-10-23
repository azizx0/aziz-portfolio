import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  readonly i18n = inject(I18nService);
  readonly imageError = signal(false);

  readonly coreTech = [
    'Angular',
    'Spring Boot',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'Node.js',
    'MySQL',
    'GitLab CI/CD'
  ];

  onImageError(): void {
    this.imageError.set(true);
  }

  scrollTo(elementId: string): void {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
