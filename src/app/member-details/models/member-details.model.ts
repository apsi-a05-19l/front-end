import {ActivitiesModel} from './activities.model';

export class MemberDetailsModel {
  id: number;
  name: string;
  surname: string;
  organisationStatus: string;
  points: number;
  activities: ActivitiesModel[];
}
