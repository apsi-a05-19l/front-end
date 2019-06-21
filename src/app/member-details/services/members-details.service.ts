import {Injectable} from '@angular/core';
import {ActivitiesModel} from '../models/activities.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PostMemberModel} from '../../members/mock-data/post-member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailsService {

  constructor(private http: HttpClient) {
  }

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
  }

  fetchMember(memberId: number): Promise<any> {
    return this.http.get(serverAddress + '/members/' + memberId).toPromise();
  }

  fetchOrganisationStatuses(): Promise<any> {
    return this.http.get(serverAddress + '/role').toPromise();
  }

  saveActivity(activityToSave: ActivitiesModel, memberID: number): Promise<any> {
    return this.http.post(serverAddress + '/activity/' + memberID, activityToSave).toPromise();
  }

  deleteActivity(activityID: number): Promise<any> {
    return this.http.delete(serverAddress + '/activity/' + activityID)
      .toPromise()
      .catch((error: HttpErrorResponse) => this.handleError(error));
  }

  deleteMember(memberID: number): Promise<any> {
    return this.http.delete(serverAddress + '/members/' + memberID)
      .toPromise()
      .catch((error: HttpErrorResponse) => this.handleError(error));
  }

  updateActivity(activityToUpdate: ActivitiesModel): Promise<ActivitiesModel> {
    return Promise.resolve(activityToUpdate);
  }

  updateMember(memberToSave: PostMemberModel): Promise<any> {
    return this.http.put(serverAddress + '/members', memberToSave).toPromise();
  }

  archiveMember(memberToArchive: PostMemberModel): Promise<any> {
    return this.http.put(serverAddress + '/members/' + memberToArchive.id, memberToArchive).toPromise();
  }
}
