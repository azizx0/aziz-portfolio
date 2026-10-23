import { Component, inject, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';
import { ProjectItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  readonly i18n = inject(I18nService);

  readonly selectedProjectModal = signal<ProjectItem | null>(null);

  openModal(project: ProjectItem): void {
    this.selectedProjectModal.set(project);
  }

  closeModal(): void {
    this.selectedProjectModal.set(null);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeModal();
  }
}
