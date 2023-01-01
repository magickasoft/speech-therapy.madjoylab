import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice} from '../styles';
import {ClientCard} from './card';
import {CustomSlider} from './customSlider';

const Container = SC.section`
  overflow: hidden;
  padding: 0 0 140px 0;
  @media ${maxDevice.tablet} {
    padding: 0 0 30px 0;
  }
`;

const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 30px 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 30px 30px 0 30px;
  }
`;

const H3 = SC.h3`
  font-weight: 600;
  margin: 0 0 12px 0;
  font-size: 30px;
  line-height: 1.3;
  @media ${maxDevice.laptop} {
    font-size: 26px;
  }
  @media ${maxDevice.tablet} {
    font-size: 22px;
    margin: 0 0 8px 0;
  }
`;

const slideData = [
  {
    desc: 'HomePage.Clients.clientDesc1',
    src: '/static/clients/Kovtun_Anastasia.jpeg',
    executive: 'HomePage.Clients.clientExecutive1',
    position: 'HomePage.Clients.clientPosition1',
  },
  {
    desc: 'HomePage.Clients.clientDesc2',
    src: '/static/clients/Oleg_Borisov.jpeg',
    executive: 'HomePage.Clients.clientExecutive2',
    position: 'HomePage.Clients.clientPosition2',
  },
  {
    desc: 'HomePage.Clients.clientDesc3',
    src: '/static/clients/Dmitry_Butyanov.jpeg',
    executive: 'HomePage.Clients.clientExecutive3',
    position: 'HomePage.Clients.clientPosition3',
  },
  {
    desc: 'HomePage.Clients.clientDesc4',
    src: '/static/clients/Alexander_Lukash.jpeg',
    executive: 'HomePage.Clients.clientExecutive4',
    position: 'HomePage.Clients.clientPosition4',
  },
  {
    desc: 'HomePage.Clients.clientDesc5',
    src: '/static/clients/Belimov_Alexander.jpeg',
    executive: 'HomePage.Clients.clientExecutive5',
    position: 'HomePage.Clients.clientPosition5',
  },
  {
    desc: 'HomePage.Clients.clientDesc6',
    src: '/static/clients/Kirill_Makarkin.jpeg',
    executive: 'HomePage.Clients.clientExecutive6',
    position: 'HomePage.Clients.clientPosition6',
  },
];

export const Clients = props => {
  const {t} = useTranslation('common');
  return (
    <Element name="clients">
      <Container>
        <Content>
          <H3>{t('HomePage.Clients.title')}</H3>
        </Content>
        <CustomSlider>
          {slideData.map((o, i) => (
            <ClientCard key={i} {...o} />
          ))}
        </CustomSlider>
      </Container>
    </Element>
  );
};
