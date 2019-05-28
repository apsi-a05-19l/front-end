import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APSI Club';
  image = '../../assets/informatyka1.jpg';
  constructor(private router: Router) {
  }

  clickOnTitle() {
    this.router.navigate(['']);
  }
}
