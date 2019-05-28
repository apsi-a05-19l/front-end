import {MemberDetailsModel} from '../models/member-details.model';

export const  mockMemberDetails: MemberDetailsModel[] = [
  {
    id: 1,
    name: 'Krzysztof',
    surname: 'Apolinarski',
    organisationStatus: 'Członek zarządu',
    points: 20,
    activities: [
      {
        id: 1,
        name: 'Udział w Hackathon WAWCODE',
        points: 15
      },
      {
        id: 2,
        name: 'Promowanie koła na Dniach Otwartych PW',
        points: 5
      }
    ],
    projects: [
      {
        id: 1,
        name: 'DripSens'
      }
    ]
  },
  {
    id: 2,
    name: 'Agnieszka',
    surname: 'Dąbrowska',
    organisationStatus: 'Członek zarządu',
    points: 25,
    activities: [
      {
        id: 1,
        name: 'Prowadzenie eventu na Stadionie Narodowym',
        points: 10
      },
      {
        id: 2,
        name: 'Promowanie koła na Dniach Otwartych PW',
        points: 5
      },
      {
        id: 3,
        name: 'Prowadzenie eventu w Krakowie',
        points: 10
      },
    ],
    projects: [
      {
        id: 1,
        name: 'DripSens'
      },
      {
        id: 2,
        name: 'Prąd do serca'
      }
    ]
  },
  {
    id: 3,
    name: 'Karol',
    surname: 'Pąperski',
    organisationStatus: 'Członek zarządu',
    points: 15,
    activities: [
      {
        id: 1,
        name: 'Promowanie koła na Dniach Otwartych PW',
        points: 5
      },
      {
        id: 2,
        name: 'Prowadzenie eventu w Krakowie',
        points: 10
      },
    ],
    projects: [
      {
        id: 2,
        name: 'Prąd do serca'
      },
      {
        id: 3,
        name: 'Gods Eye'
      }
    ]
  },
  {
    id: 4,
    name: 'Mateusz',
    surname: 'Kopeć',
    organisationStatus: 'Członek koła',
    points: 30,
    activities: [
      {
        id: 1,
        name: 'Udział w Hackathon WAWCODE',
        points: 15
      },
      {
        id: 2,
        name: 'Promowanie koła na Dniach Otwartych PW',
        points: 5
      },
      {
        id: 3,
        name: 'Prowadzenie eventu na Stadionie Narodowym',
        points: 10
      },
    ],
    projects: [
      {
        id: 1,
        name: 'DripSens'
      },
      {
        id: 2,
        name: 'Prąd do serca'
      },
      {
        id: 3,
        name: 'Gods Eye'
      }
    ]
  }
];
