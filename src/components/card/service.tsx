import SC from '@emotion/styled';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import React from 'react';

import {maxDevice, minDevice} from '../../styles';

type ContainerProps = {
  index: number;
};

const Container = SC.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px;
  padding: 25px; 
  color: ${({index}) => (index % 2 === 1 ? '#fff' : '#222')};
  background-color: ${({index}) => (index % 2 === 1 ? '#222' : '#fff')};
  box-shadow: 0 4px 14px 5px rgb(0 0 0 / 15%);
  border-radius: 30px;
  @media ${minDevice.laptop} {
    margin: 30px;
    padding: 30px
  }
`;

const Title = SC.div`
  -webkit-line-clamp: 10;
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 5px;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  word-break: break-word;
  @media ${minDevice.tablet} {
    font-size: 22px;
    line-height: 31px;
  }
  @media ${minDevice.laptop} {
    font-size: 26px;
  }
`;

const Desc = SC.div`
  font-size: 10px;
  line-height: 12px;
  padding: 5px 0;
  margin-bottom: 15px;
  color: inherit;
  transition: all .3s ease;
  background-color: transparent;
  border: none;
  @media ${minDevice.laptop} {
    font-size: 14px;
    line-height: 18px;
  }
`;

const Content = SC.div`
  align-items: center;
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  @media ${maxDevice.tablet} {
    display: none;
  }
`;

const Label = SC.div`
  font-size: 14px;
  line-height: 18px;
`;

const BenefitLabel = SC.div`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  @media ${maxDevice.tablet} {
    display: none;
  }
  @media ${minDevice.laptop} {
    font-size: 16px;
    line-height: 18px;
  }
`;

type ServiceCardProps = {
  label?: any;
  desc?: any;
  benefits?: any;
  index?: number;
};

export const ServiceCard = ({label, desc, benefits, index = 0}: ServiceCardProps) => {
  const {t} = useTranslation('common');
  return (
    <Container index={index}>
      <Title>{t(label)}</Title>
      <Desc>{t(desc)}</Desc>
      {Boolean(benefits?.length) && <BenefitLabel>{t('HomePage.Services.benefit')}</BenefitLabel>}
      {benefits.map((o, i) => (
        <Content key={i}>
          <Image width="24" height="24" src="/static/services-check.svg" alt="check" />
          <Label>{t(o)}</Label>
        </Content>
      ))}
    </Container>
  );
};
