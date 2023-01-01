import SC from '@emotion/styled';
import React from 'react';

import {ibmplexsans400, maxDevice} from '../styles';
import {Text} from './common';
import {Icon} from './icon';
import {LocaleSwitcher} from './localeSwitcher';
import {ScrollIndicator} from './scrollIndicator';

type ContainerProps = {
  active: boolean;
};

const Container = SC.header<ContainerProps>`
  font-family: ${ibmplexsans400.style.fontFamily};
  background: ${({active}) => (active ? '#ffffff05' : '#ffffff05')};
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  margin: 0 auto;
  padding: 0 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px;
    height: 3.5rem;
  }
`;

const SCIcon = SC(Icon)`
  background-color: #fff;
  border-radius: 50%;
  margin-left: 15px;
`;

const Label = SC.div`
  display: flex;
  flex-direction: column;
  @media ${maxDevice.tablet} {
    display: none
  }
`;

const Link = SC.a`
  font-size: 0.9rem;
  line-height: 1.125rem;
  background: linear-gradient(90deg,#fe00dd -56.25%,#fd0009 135.94%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Row = SC.div`
  display: flex;
  flex-direction: row;
`;

const useScroll = () => {
  const [active, setActive] = React.useState(false);

  const onScroll = () => {
    setActive(window?.scrollY >= 400);
  };

  React.useEffect(() => {
    window?.addEventListener('scroll', onScroll);

    return () => window?.removeEventListener('scroll', onScroll);
  }, []);

  return [active];
};

export const Header = props => {
  const [active] = useScroll();

  return (
    <>
      <ScrollIndicator />
      <Container active={active}>
        <Text>
          <strong>madjoylab</strong>
        </Text>
        <Row>
          <LocaleSwitcher />
          <Label>
            <Link href="tel://+79601195445">+7 960 119 54 45</Link>
            <Link href="mailto:madjoylab@gmail.com">madjoylab@gmail.com</Link>
          </Label>
          <Link href="https://t.me/madjoylab">
            <SCIcon name="telegram" size={32} />
          </Link>
          {/*<Link href="https://wa.me/79601195445">*/}
          {/*  <SCIcon name="whatsApp" size={32} />*/}
          {/*</Link>*/}
        </Row>
      </Container>
    </>
  );
};
