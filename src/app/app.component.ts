import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    TabsComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Portfolio';
}
