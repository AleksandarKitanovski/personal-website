import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  writeToClipboard() {
    navigator.clipboard.writeText('kitanovski.aleksandar@yahoo.com');
    alert('Mail Copied!');
  }
}
