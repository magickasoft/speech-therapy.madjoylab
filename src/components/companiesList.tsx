import SC from '@emotion/styled';
import React from 'react';

import {minDevice} from '../styles';

const Container = SC.div`
  overflow: hidden;
  padding: 18px 0;
`;

const Ul = SC.ul`
  margin: 0;
  display: flex;
  align-items: center;
  width: max-content;
  animation: logosRunningLine 25s linear infinite alternate;
  @media ${minDevice.laptop} {
    animation-duration: 20s;
  }
`;

const Li = SC.li`
  list-style-type: none;
  height: 45px;
  margin: 0 20px;
  @media ${minDevice.tablet} {
    margin: 0 30px;
  }
  @media ${minDevice.laptop} {
    height: 80px;
    margin: 0 42px;
  }
`;

const Img = SC.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  border: 0;
  max-width: 100%; 
`;

const companiesList = [
  {src: '/static/companies/1.sber.svg', alt: 'sber'},
  {src: '/static/companies/2.rosselhoz.svg', alt: 'rosselhoz'},
  {src: '/static/companies/3.gazprombank.svg', alt: 'gazprombank'},
  {src: '/static/companies/4.bks.svg', alt: 'bks'},
  {src: '/static/companies/5.mkb.svg', alt: 'mkb'},
  {src: '/static/companies/6.otkritie.svg', alt: 'otkritie'},
  {src: '/static/companies/7.rosbank.svg', alt: 'rosbank'},
  {src: '/static/companies/8.sovkombank.svg', alt: 'sovkombank'},
  {src: '/static/companies/9.tinkoff.svg', alt: 'tinkoff'},
  {src: '/static/companies/11.sbibank.svg', alt: 'sbibank'},
  {src: '/static/companies/12.akbarsbank.svg', alt: 'akbarsbank'},
  {src: '/static/companies/13.vbrr.svg', alt: 'vbrr'},
  {src: '/static/companies/14.bankci.svg', alt: 'bankci'},
];

export const CompaniesList = props => (
  <Container>
    <Ul>
      {companiesList.map((o, i) => (
        <Li key={i}>
          <Img {...o} loading="eager" />
        </Li>
      ))}
    </Ul>
  </Container>
);
