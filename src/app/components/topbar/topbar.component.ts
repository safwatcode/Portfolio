import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  constructor() {
    this.initializeTheme();
  }
  initializeTheme(): void {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = sessionStorage.getItem('theme');

    const theme = savedTheme ? savedTheme : isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    this.updateFavicon(theme);
  }

  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    sessionStorage.setItem('theme', newTheme);
    this.updateFavicon(newTheme);
  }

  private updateFavicon(theme: string): void {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (favicon) {
      favicon.href =
        theme === 'dark'
          ? 'images/favicon-dark.svg'
          : 'images/favicon-light.svg';
    }
  }

  // initializeTheme(): void {
  //   const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   const savedTheme = sessionStorage.getItem('theme');

  //   if (savedTheme) {
  //     document.documentElement.setAttribute('data-theme', savedTheme);
  //   } else {
  //     document.documentElement.setAttribute(
  //       'data-theme',
  //       isDark ? 'dark' : 'light'
  //     );
  //   }
  // }

  // toggleTheme(): void {
  //   const currentTheme = document.documentElement.getAttribute('data-theme');
  //   const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  //   document.documentElement.setAttribute('data-theme', newTheme);
  //   sessionStorage.setItem('theme', newTheme);
  // }
}
