import {WikiDetailsModel} from '../models/wiki-details.model';

export const mockWikiDetails: WikiDetailsModel[] = [
  {
    id: 1,
    title: 'DripSens',
    post_topics: [
      {
        id: 1,
        text: 'MACHINE_LEARNING'
      },
      {
        id: 2,
        text: 'MATLAB'
      }
    ],
    Authors: [
      {
        id: 1,
        name: 'hn',
        surname: 'Doe'
      }
      ]
  }
];
