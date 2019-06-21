import { Injectable } from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PostMemberModel} from '../../members/mock-data/post-member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  fetchMember(memberId: number): Promise<any> {
    return this.http.get(serverAddress + '/members/' + memberId).toPromise();
  }

  fetchOrganisationStatuses(): Promise<any> {
    return this.http.get(serverAddress + '/role').toPromise();
  }

  saveActivity(activityToSave: ActivitiesModel, memberID: number): Promise<any> {
    return this.http.post(serverAddress + '/activity/' + memberID, activityToSave).toPromise();
  }

  deleteActivity(activityID: number) {
    return this.http.delete<void>(serverAddress + '/activity/' + activityID).pipe(catchError(this.handleError));
  }

  deleteMember(memberID: number) {
    return this.http.delete<void>(serverAddress + '/members/' + memberID).pipe(catchError(this.handleError));
  }

  updateActivity(activityToUpdate: ActivitiesModel): Promise<ActivitiesModel> {
    return Promise.resolve(activityToUpdate);
  }

  updateMember(memberToSave: PostMemberModel): Promise<any> {
    return this.http.put(serverAddress + '/members', memberToSave).toPromise();
  }
}
