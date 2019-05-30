import {Injectable} from '@angular/core';
import {ReportModel} from '../models/report.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ProjectModel} from '../../projects/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor(private http: HttpClient) {
  }

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

  fetchProject(projectId: number): Promise<any> {
    return this.http.get(serverAddress + '/projects/' + projectId).toPromise();
  }

  fetchMembersLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveReport(reportToSave: ReportModel, projectId: number): Promise<any> {
    return this.http.post(serverAddress + '/report/' + projectId, reportToSave).toPromise();
  }

  deleteReport(reportID: number) {
    return this.http.delete<void>(serverAddress + '/report/' + reportID).pipe(catchError(this.handleError));
  }

  deleteProject(projectID: number) {
    return this.http.delete<void>(serverAddress + '/projects/' + projectID).pipe(catchError(this.handleError));
  }

  updateReport(reportToUpdate: ReportModel): Promise<ReportModel> {
    return Promise.resolve(reportToUpdate);
  }

  updateProject(projectToSave: ProjectModel, leaderID: number): Promise<any> {
    return Promise.resolve(projectToSave);
  }
}
