import {ReportModel} from './report.model';

export class ProjectDetailsModel {
  id: number;
  name: string;
  currentLeader: string;
  reports: ReportModel[];
}
