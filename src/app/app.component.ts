import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-website';

  toggle() {
    let links = document.getElementById('links')!;
    let navigation = document.getElementById('navigation')!;
    let content = document.getElementById('content')!;

    if (links.style.display == 'inline-block') {
      links.style.display = 'none';

      navigation.style.height = '50px';
      navigation.style.flexDirection = 'row';

      content.style.paddingTop = '50px';
    } else {
      links.style.display = 'inline-block';

      navigation.style.height = '160px';
      navigation.style.flexDirection = 'column';

      content.style.paddingTop = '160px';
    }
  }
}
