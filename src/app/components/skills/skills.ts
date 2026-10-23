import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  readonly i18n = inject(I18nService);

  readonly selectedCategory = signal<string>('all');

  // Exact skills from prompt
  readonly coreLanguages = ['Java', 'TypeScript', 'JavaScript', 'PHP', 'SQL'];
  readonly coreFrameworks = ['Angular', 'Spring Boot', 'Spring Security', 'Node.js/Express', 'Symfony', 'Flutter'];

  readonly filteredCategories = computed(() => {
    const selected = this.selectedCategory();
    if (selected === 'all') {
      return this.i18n.skillCategories;
    }
    return this.i18n.skillCategories.filter(c => c.id === selected);
  });

  setFilter(id: string): void {
    this.selectedCategory.set(id);
  }
}
