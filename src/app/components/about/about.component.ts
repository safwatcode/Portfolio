import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  linksURL: string = 'https://portfolio-six-ebon-77.vercel.app/projects';
  googleMapsURL: string = "https://www.google.com/maps?q=Elsalam+City,+Cairo,+Egypt"
}
