import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, private router: Router) { }

  fetchProjectsList(): Promise<any> {
    return this.http.get(serverAddress + '/projects')
      .toPromise();
  }
}
