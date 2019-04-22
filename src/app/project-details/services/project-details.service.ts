import {Injectable} from '@angular/core';
import {ProjectDetailsModel} from '../models/project-details.model';
import {mockProjectDetails} from '../mock-data/mock-project-details';
import {ReportModel} from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() {
  }

  fetchProject(projectId: number): Promise<ProjectDetailsModel> {
    const projectToReturn: ProjectDetailsModel = mockProjectDetails.filter(project => project.id === projectId)[0];
    return Promise.resolve(projectToReturn);
  }

  saveReport(reportToSave: ReportModel): Promise<ReportModel> {
    return Promise.resolve(reportToSave);
  }
}
