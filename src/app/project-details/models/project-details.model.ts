import {ReportModel} from './report.model';
import {SimpleMemberModel} from '../../member-details/models/simple-member.model';

export class ProjectDetailsModel {
  id: number;
  name: string;
  currentLeader: string;
  reports: ReportModel[];
  members: SimpleMemberModel[];
}
