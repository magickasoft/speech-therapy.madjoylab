import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Element} from 'react-scroll';

import {ibmplexsans400, maxDevice, minDevice} from '../styles';

const Container = SC.section`
  overflow: hidden;
  position: relative;
  background-color: #edecec;
  padding: 20px 0 40px;
  margin: -20px 0 0;
  @media ${minDevice.tablet} {
    padding-bottom: 70px;
  }
  @media ${minDevice.laptop} {
    position: relative;
    display: flex;
    padding: 55px 0 45px;
    margin-bottom: 60px;
    min-height: 378px;
  }
  @media ${minDevice.laptopL} {
    min-height: 630px;
    padding: 50px 0 20px;
  }
`;

const Content = SC.div`
  font-family: ${ibmplexsans400.style.fontFamily};
  width: 100%;
  padding: 0 30px;
  @media ${minDevice.laptop} {
    width: 960px;
    margin: 0 auto;
    padding: 0;
  }
  @media ${minDevice.laptopL} {
    width: 1339px;
    max-width: 1255px;
    margin: 0 auto;
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

const RightColumn = SC.div`
  @media ${minDevice.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 450px;
    height: 100%;
    margin-left: auto;
  }
  @media ${minDevice.laptopL} {
    width: 544px;
  }
`;

const SvgWrap = SC.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 84%;
  @media (min-width: 810px) {
    width: 750px;
    height: 630px;
    margin: 0 auto;
    padding-bottom: 0;
  }
  @media ${minDevice.laptop} {
    position: absolute;
    top: 50%;
    left: calc((100vw - 960px) / 2);
    transform: translateY(-50%);
    width: 450px;
    height: 378px;
  }
  @media ${minDevice.laptopL} {
    width: 750px;
    height: 630px;
    left: calc((100vw - 1366px) / 2 - 20px);
  }
`;

const Text = SC.div`
  font-size: 14px;
  line-height: 18px;
  color: #222222;
  margin-bottom: 15px;
  max-width: 600px;
  @media ${minDevice.laptop} {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 47px;
  }
`;

const Link = SC.a`
  padding: 8px 24px;
  font-size: 12px;
  line-height: 16px;
  background-color: #ffffff;
  border: 2px solid #E13737;
  border-radius: 30px 30px 0px 30px;
  color: #000000;
  cursor: pointer;
  -webkit-appearance: button;
  &:hover {
    background: #E13737;
    color: #ffffff;
    -webkit-text-fill-color: #ffffff;
  }
  @media ${minDevice.laptop} {
    padding: 16px 24px;
    font-size: 15px;
    line-height: 18px;
  }
`;

const Img = SC.img``;

export const WorkWithUs = props => {
  const {t} = useTranslation('common');
  return (
    <Element name="workWithUs">
      <Container>
        <Content>
          <RightColumn>
            <H3>{t('HomePage.WorkWithUs.title')}</H3>
            <SvgWrap>
              <Img alt="work-with-us" src="/static/icon-work-with-us.svg" loading="eager" />
            </SvgWrap>
            <Text>{t('HomePage.WorkWithUs.text')}</Text>
            <Link target="_blank" href="https://forms.gle/cTnRi66ieWaJudhS9">
              {t('HomePage.WorkWithUs.link')}
            </Link>
          </RightColumn>
        </Content>
      </Container>
    </Element>
  );
};
