import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {minDevice} from '../../styles';

const Container = SC.div`
  margin: 0 auto;
  max-width: 1374px;
  padding: 0 20px;
  width: 100%;
  @media ${minDevice.tablet} {
    padding: 0 32px;
  }
  @media ${minDevice.laptop} {
    padding: 0 15px;
  }
`;

const Desc = SC.div`
  background: url('/static/icon-quote.svg') no-repeat 0 0;
  background-size: 1.5rem auto;
  max-width: 62.5rem;
  padding: 0 0 0 3.75rem;
  position: relative;
  @media ${minDevice.tablet} {
    background-size: 2.4375rem auto;
    padding: 0 0 0 8.875rem;
  }
  @media ${minDevice.laptop} {
    padding: 0 0 0 10.5rem;
  }
`;

const P = SC.p`
  font-size: 1rem;
  line-height: 1.375rem;
  margin: 0 0 1.125rem;
  @media ${minDevice.tablet} {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0 0 2.375rem;
  }
  @media ${minDevice.laptop} {
    margin: 0 0 2.5rem;
  }
`;

const User = SC.div`
  margin: 0 0 0 3.625rem;
  padding: 0 0 0 2.875rem;
  position: relative;
  @media ${minDevice.tablet} {
    margin: 0 0 0 8.875rem;
    padding: 0 0 0 3.5rem;
  }
  @media ${minDevice.laptop} {
    margin: 0 0 0 10.5rem;
    padding: 0 0 0 4rem;
  }
`;

const Photo = SC.div`
  height: 2.25rem;
  left: 0;
  padding: 0.15625rem;
  position: absolute;
  top: -0.15625rem;
  width: 2.25rem;
  @media ${minDevice.tablet} {
    height: 2.8125rem;
    top: 0;
    width: 2.8125rem;
  }
`;

const Img = SC.img`
  border-radius: 50%;
  display: block;
  height: auto;
  width: 2rem;
  @media ${minDevice.tablet} {
    width: 2.5rem;
  }
`;

const H4 = SC.h4`
  font-weight: 400;
  font-size: .6875rem;
  line-height: .875rem;
  margin: 0.1875rem 0 0.125rem;
  @media ${minDevice.tablet} {
    font-size: 1rem;
    line-height: 1.375rem;
    margin: 0 0 0.25rem;
  }
`;

const Position = SC.p`
  color: #828290;
  font-size: .6875rem;
  line-height: .875rem;
  margin: 0 0 0.1875rem;
  @media ${minDevice.tablet} {
    font-size: .875rem;
    line-height: 1.125rem;
    margin: 0;
  }
  @media ${minDevice.laptop} {
    font-size: 1rem;
  }
`;

type ClientCardProps = {
  src?: any;
  desc?: any;
  position?: any;
  executive?: any;
};

export const ClientCard = ({src, desc, position, executive}: ClientCardProps) => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <Desc>
        <P>{t(desc)}</P>
      </Desc>
      <User>
        {src && (
          <Photo>
            <Img src={src} loading="eager" alt={executive} />
          </Photo>
        )}
        {executive && <H4>{t(executive)}</H4>}
        {position && <Position>{t(position)}</Position>}
      </User>
    </Container>
  );
};
