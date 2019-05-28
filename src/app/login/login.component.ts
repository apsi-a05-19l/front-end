import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../assets/server.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const formData = new FormData();
    formData.append('username', 'member1');
    formData.append('password', 'pass1');
    this.http.post(serverAddress + '/login', formData)
      .toPromise().then(() => this.router.navigate(['']));
  }

}
