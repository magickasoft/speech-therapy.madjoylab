import SC from '@emotion/styled';
import React from 'react';

type ContainerProps = {
  width: number;
};

const Container = SC.div<ContainerProps>`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #181818;
  height: 4px;
  width: ${({width}) => `${width}%` || '0%'};
`;

const useScroll = () => {
  const [scrollTop, setScrollTop] = React.useState(0);

  const onScroll = () => {
    const winScroll = document?.documentElement?.scrollTop;
    const height = document?.documentElement?.scrollHeight - document?.documentElement?.clientHeight;
    const scrolled = Math.floor((winScroll / height) * 100);
    setScrollTop(scrolled);
  };

  React.useEffect(() => {
    window?.addEventListener('scroll', onScroll);

    return () => window?.removeEventListener('scroll', onScroll);
  }, []);

  return [scrollTop];
};

export const ScrollIndicator = props => {
  const [scrollTop] = useScroll();
  return <Container width={scrollTop} />;
};
