import { Injectable } from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {MemberModel} from '../../members/models/member.model';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  fetchMember(memberId: number): Promise<any> {
    return this.http.get(serverAddress + '/members/' + memberId).toPromise();
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
}
