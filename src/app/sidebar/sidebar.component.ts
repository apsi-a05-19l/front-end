import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  image = '../../assets/logo_inf.jpg';
  clubTitle = 'APSI Club';

  constructor(private router: Router) { }

  ngOnInit() {}

  onLoginButtonClick() {
    this.router.navigate(['login']);
  }
}
