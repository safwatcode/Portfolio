import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  emailURL: string =
    "mailto:safwatcode@gmail.com?subject=General Inquiry about [Your Question]&body= Hello, Safwat Ahmed%0D%0A%0D%0AI'm [Your Name] from [Your Company].%0D%0A%0D%0A I'm reaching you for ...";
  phoneURL: string = 'tel:+201125285475';
  downloadResume(): void {
    let resumeURL = 'assets/Safwat Ahmed Resume.pdf';
    let resumeLink = document.createElement('a');
    resumeLink.href = resumeURL;
    resumeLink.download = 'Safwat Ahmed Resume.pdf';
    resumeLink.title = resumeURL;
    resumeLink.target = '_blank';
    resumeLink.click();
  }
}
