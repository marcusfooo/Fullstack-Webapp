import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '/people.jpg',
    altText: 'people',
    caption: 'People are the greatest assets of a team. Everyone matters when moving forward together as a Tribe.',
    header: 'People',
    key: '1',
  },
  {
    src: '/purpose.jpg',
    altText: 'Purpose',
    caption: '"It does not matter how slowly you go as long as you do not stop." Having a consistent direction means that reaching your goal, is only a matter of time',
    header: 'Purpose',
    key: '2'
  },
  {
    src: '/passion.jpg',
    altText: 'Passion',
    caption: 'Passion is energy. Enjoying what I do spurs me to give everything that is on my plate my best.',
    header: 'Passion',
    key: '3'
  }
];


const MyEthos = () => <UncontrolledCarousel items={items} />;

export default MyEthos;