import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {Router} from '@angular/router';
import {PostModel} from '../models/postModel';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient, private router: Router) { }

  fetchPostsList(): Promise<any> {
    return this.http.get(serverAddress + '/post')
      .toPromise();
  }

  fetchAuthorLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveWiki(wikiToSave: PostModel, AuthorID: number): Promise<any> {
    return this.http.post(serverAddress + '/post/', wikiToSave).toPromise();
  }
}
