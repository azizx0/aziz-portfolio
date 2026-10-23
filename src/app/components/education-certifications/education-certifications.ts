import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-education-certifications',
  imports: [CommonModule],
  templateUrl: './education-certifications.html',
  styleUrl: './education-certifications.scss'
})
export class EducationCertificationsComponent {
  readonly i18n = inject(I18nService);
}
