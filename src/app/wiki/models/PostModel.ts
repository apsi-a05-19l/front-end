import {PartModel} from './PartModel';

export class PostModel {
  id: number;
  title: string;
  postTopic: string;
  authorId: number;
  parts: PartModel[];
}
