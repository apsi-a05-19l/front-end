import {Component} from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  images = ['../../assets/slideshow/1.jpg', '../../assets/slideshow/2.jpg', '../../assets/slideshow/3.jpg'];
}
