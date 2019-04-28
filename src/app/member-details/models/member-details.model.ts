import {ActivitiesModel} from './activities.model';
import {ProjectModel} from '../../projects/models/project.model';

export class MemberDetailsModel {
  id: number;
  name: string;
  surname: string;
  organisationStatus: string;
  points: number;
  activities: ActivitiesModel[];
  projects: ProjectModel[];
}
