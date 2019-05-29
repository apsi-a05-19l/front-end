import {Injectable} from '@angular/core';
import {ReportModel} from '../models/report.model';
import {HttpClient} from '@angular/common/http';
import {serverAddress} from '../../../assets/server.constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor(private http: HttpClient) {
  }

  fetchProject(projectId: number): Promise<any> {
    return this.http.get(serverAddress + '/projects/' + projectId).toPromise();
  }

  saveReport(reportToSave: ReportModel): Promise<any> {
    return this.http.post(serverAddress + '/report', reportToSave).toPromise();
  }
}
