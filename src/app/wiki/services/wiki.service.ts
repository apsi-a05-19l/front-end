import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {Router} from '@angular/router';
import {PostModel} from '../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient, private router: Router) { }

  fetchPostsList(): Promise<any> {
    return this.http.get(serverAddress + '/post')
      .toPromise();
  }

  fetchPostElement(id: number): Promise<any> {
    return this.http.get(serverAddress + '/post/' + id)
      .toPromise();
  }

  fetchAuthorLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  fetchTopicsList(): Promise<any> {
    return this.http.get(serverAddress + '/post/topic').toPromise();
  }

  saveWiki(wikiToSave: PostModel, AuthorID: number): Promise<any> {
    return this.http.post(serverAddress + '/post/', wikiToSave).toPromise();
  }
}
