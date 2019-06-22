import {TopicModel} from './topic.model';
import {SimpleMemberModel} from '../../member-details/models/simple-member.model';

export class WikiDetailsModel {
  id: number;
  title: string;
  post_topics: TopicModel[];
  Authors: SimpleMemberModel[];
}
