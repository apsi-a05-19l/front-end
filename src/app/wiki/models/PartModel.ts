import {LinkModel} from './LinkModel';

export class PartModel {
  id: number;

  header: number;

  contents: string;

  links: LinkModel[] = [];

  post_id: number;
}
