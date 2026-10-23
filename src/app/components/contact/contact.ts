import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  readonly i18n = inject(I18nService);

  readonly emailCopied = signal(false);

  // Quick email drafter
  readonly subjectInput = signal('');
  readonly messageInput = signal('');

  copyEmail(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(this.i18n.personal.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2400);
      });
    }
  }

  openEmailClient(): void {
    const subject = encodeURIComponent(this.subjectInput() || 'Software Engineering / PFE Opportunity');
    const body = encodeURIComponent(this.messageInput() || 'Hello Mohamed Aziz,\n\nI came across your portfolio and would like to discuss an opportunity.\n\nBest regards,');
    const mailtoUrl = `mailto:${this.i18n.personal.email}?subject=${subject}&body=${body}`;
    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  }
}
