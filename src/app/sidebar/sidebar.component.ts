import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProjectsButtonClick() {
    this.router.navigate(['projects']);
  }

  onMembersButtonClick() {
    this.router.navigate(['members']);
  }
}
