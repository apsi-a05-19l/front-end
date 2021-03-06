import {Injectable} from '@angular/core';
import {ReportModel} from '../models/report.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';
import {throwError} from 'rxjs';
import {ProjectDetailsModel} from '../models/project-details.model';
import {PostProjectModel} from '../../projects/models/PostProjectModel';
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

  addMemberToProject(memberId: number, project: ProjectDetailsModel): Promise<any> {
    return this.http.put(serverAddress + '/projects/addMember/' + project.id + '/' + memberId, project).toPromise();
  }

  fetchProject(projectId: number): Promise<any> {
    return this.http.get(serverAddress + '/projects/' + projectId).toPromise();
  }

  fetchMembersLists(): Promise<any> {
    return this.http.get(serverAddress + '/members').toPromise();
  }

  saveReport(reportToSave: ReportModel, projectId: number): Promise<any> {
    return this.http.post(serverAddress + '/report/' + projectId, reportToSave).toPromise();
  }

  deleteReport(reportID: number): Promise<any> {
    return this.http.delete(serverAddress + '/report/' + reportID)
      .toPromise()
      .catch((err: HttpErrorResponse) => this.handleError(err));
  }

  removeMember(project: ProjectDetailsModel, memberID: number): Promise<any> {
    return this.http.put(serverAddress + '/projects/removeMember/' + project.id + '/' + memberID, project).toPromise();
  }

  deleteProject(projectID: number): Promise<any> {
    return this.http.delete(serverAddress + '/projects/' + projectID)
      .toPromise()
      .catch((err: HttpErrorResponse) => this.handleError(err));
  }

  updateReport(reportToUpdate: ReportModel): Promise<any> {
    return this.http.put(serverAddress + '/report', reportToUpdate).toPromise();
  }

  updateProject(projectToSave: PostProjectModel): Promise<any> {
    return this.http.put(serverAddress + '/projects', projectToSave).toPromise();
  }

  archiveProject(projectToArchive: ProjectModel): Promise<any> {
    return this.http.put(serverAddress + '/projects/archive/' + projectToArchive.id, projectToArchive).toPromise();
  }
}
