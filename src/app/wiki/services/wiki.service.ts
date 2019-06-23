import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {Router} from '@angular/router';
import {WikiModel} from '../models/wiki.model';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient, private router: Router) { }

  fetchWikiList(): Promise<any> {
    return this.http.get(serverAddress + '/post').toPromise();
  }

  fetchTopicList(): Promise<any> {
    return this.http.get(serverAddress + '/topic').toPromise();
  }

  fetchAuthorLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveWiki(wikiToSave: WikiModel): Promise<any> {
    return this.http.post(serverAddress + '/post/', wikiToSave).toPromise();
  }

}
