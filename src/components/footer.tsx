import SC from '@emotion/styled';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {Link} from 'react-scroll';

import {ibmplexsans400, maxDevice, minDevice} from '../styles';

const Container = SC.footer`
  font-family: ${ibmplexsans400.style.fontFamily};
  padding: 0 140px 0.75rem 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0.75rem 30px;
  }
`;

const Content = SC.div`
  border-top: 1px solid #1f2326;
  padding-top: 3rem;
  @media ${maxDevice.tablet} {
    padding-top: 2.5rem;
  }
  @media ${maxDevice.mobileL} {
    padding-top: 2rem;
  }
`;

const Copyright = SC.div`
  padding: 1rem 0 0;
  color: #7f7f7f;
  font-size: 1rem;
  line-height: 1.375rem;
  @media ${minDevice.tablet} {
    padding: 0;
  }
`;

const Brand = SC.div`
  padding: 0.25rem 0 0;
  font-size: 1rem;
  line-height: 1.5rem;
  @media ${minDevice.tablet} {
    padding: 0;
  }
`;

const A = SC.a`
  transition: .25s ease;
  transition-property: background-position,border,color,left,margin,padding,right,opacity;
  color: #1f2326;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.625rem;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#f1477e 50%,#fa477e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  &:hover {
    background-position: 0;
  }
  @media ${minDevice.mobileL} {
    font-size: 2rem;
  }
  @media ${minDevice.tablet} {
    font-size: 2.25rem;
    line-height: 2.9375rem;
  }
`;

const Contacts = SC.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 2.5rem;
  @media ${minDevice.laptopL} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Email = SC.div`
  padding: 0 3rem 0 0;
`;

const Note = SC.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  position: relative;
  @media ${minDevice.tablet} {
    flex-direction: row;
  }
`;

const Social = SC.div`
  display: flex;
  flex-wrap: wrap;
  @media ${minDevice.tablet} {
    margin-left: auto;
  }
`;

const SocialLink = SC.a`
  color: #181818;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 15px 0 0;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;
  
  &:hover {
    background-position: 0;
  }
  
  @media ${minDevice.tablet} {
    font-size: rem(16px);
    margin: rem(0 0 0 20px);
  }

  @media ${minDevice.laptop} {
    font-size: 14px;
    font-weight: normal;
  }
`;

const Nav = SC.nav`
  display: none;
  padding: 0 0 1rem;
  @media ${minDevice.laptop} {
    display: block;
  }
`;

const Ul = SC.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(380px);
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Li = SC.li`
  padding: 0 0 0.25rem;
  width: 10rem;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const NavLink = SC(Link)`
  cursor: pointer !important;
  color: #22262A;
  font-size: 14px;
  line-height: 20px;
  background-image: linear-gradient(-90deg,#181818 0%,#181818 49.99%,#FD0009 50%,#FE00DD 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 100%;
  background-size: 200%;

  &:hover {
    background-position: 0;
  }
`;

const linkProps = {
  activeClass: 'active',
  hashSpy: true,
  spy: true,
  smooth: true,
  duration: 500,
  offset: 50,
};

const socialLinkItems = [
  {label: 'Footer.socialLink1', target: '_blank', href: 'https://www.linkedin.com/company/kotelov'},
  {label: 'Footer.socialLink2', target: '_blank', href: 'https://podcast.ru/1591909301'},
  {label: 'Footer.socialLink3', target: '_blank', href: 'https://youtube.com/@madjoylab'},
  {
    label: 'Footer.socialLink4',
    target: '_blank',
    href: 'https://www.tiktok.com/@kotelov_com?lang=ru-RU&amp;is_copy_url=1&amp;is_from_webapp=v1',
  },
  {label: 'Footer.socialLink5', target: '_blank', href: 'https://vk.com/madjoylab'},
  {label: 'Footer.socialLink6', target: '_blank', href: 'https://dzen.ru/madjoylab'},
];

const linkItems = [
  {label: 'Footer.link1', href: '/#intro', to: 'intro', id: 'intro'},
  {label: 'Footer.link2', href: '/#services', to: 'services', id: 'services'},
  {label: 'Footer.link3', href: '/#benefits', to: 'benefits', id: 'benefits'},
  {label: 'Footer.link4', href: '/#techStacks', to: 'techStacks', id: 'techStacks'},
  {label: 'Footer.link5', href: '/#workWithUs', to: 'workWithUs', id: 'workWithUs'},
  {label: 'Footer.link6', href: '/#clients', to: 'clients', id: 'clients'},
];

type LinkProps = {
  label?: any;
  href?: string;
  id?: string;
  to?: string;
};

type SocialLinkProps = {
  label?: any;
  href?: string;
  target?: string;
};

export const Footer = () => {
  const {t} = useTranslation('common');
  return (
    <Container>
      <Content>
        <Brand>ИП Мирошниченко Надежда Александровна</Brand>
        <Brand>ИНН 366412065886</Brand>
        <Brand>ОГРНИП 322366800104235</Brand>
        <Contacts>
          <Email>
            <A href="mailto:madjoylab@gmail.com">madjoylab@gmail.com</A>
          </Email>
          <A href="tel://+79601195445">+7 960 119 54 45</A>
        </Contacts>
        <Nav>
          <Ul>
            {linkItems.map(({label, ...props}: LinkProps, index) => (
              <Li key={index}>
                <NavLink {...linkProps} {...props}>
                  {t(label)}
                </NavLink>
              </Li>
            ))}
          </Ul>
        </Nav>
        <Note>
          <Copyright>© madjoylab, {new Date().getFullYear()}</Copyright>
          <Social>
            {socialLinkItems.map(({label, ...props}: SocialLinkProps, index) => (
              <SocialLink key={index} {...props}>
                {t(label)}
              </SocialLink>
            ))}
          </Social>
        </Note>
      </Content>
    </Container>
  );
};
