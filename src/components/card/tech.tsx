import SC from '@emotion/styled';
import React from 'react';

import {minDevice} from '../../styles';

const Container = SC.div`
  margin: 20px;
  padding: 21px 34px 15px 28px;
  background: #FFF;
  box-shadow: 0 4px 14px 5px rgb(0 0 0 / 5%);
  border-radius: 20px;
  @media ${minDevice.laptop} {
    margin: 30px;
    padding: 30px 25px 20px;
    box-shadow: 0 4px 18px 8px rgb(0 0 0 / 6%);
    border-radius: 30px;
  }
`;

const Caption = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 10px;
  @media ${minDevice.laptop} {
        position: relative;
  }
`;

const Title = SC.div`
  position: relative;
  display: inline-block;
  padding: 5px 0 5px 22px;
  font-size: 14px;
  line-height: 17px;
  @media ${minDevice.laptop} {
    font-size: 18px;
    line-height: 22px;
    color: #E13737;
  }
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 18px;
    height: 18px;
    background: url(/static/technology.svg) no-repeat center / contain;
    @media ${minDevice.laptop} {
      background: url(/static/technology-black.svg) no-repeat center / contain;
    }
  }
`;

const Ul = SC.ul`
  height: 42px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0;
  margin: 0 -3px 0 -2px;
  height: auto;
  overflow: hidden;
  transition: all .3s ease;
`;

const Li = SC.li`
  display: inline-block;
  padding: 4px 18px;
  margin: 0 3px 5px 2px;
  border: 1px solid #E7E7E9;
  box-sizing: border-box;
  border-radius: 30px;
  list-style: none;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  @media ${minDevice.laptop} {
    font-size: 14px;
    line-height: 27px;
    padding: 0 18px;
    margin: 0 3px 13px 2px;
  }
`;

type TechCardProps = {
  items: any;
};

export const TechCard = ({items = []}: TechCardProps) => (
  <>
    {items.map((o, index) => (
      <Container key={index}>
        <Caption>
          <Title>{o?.label}</Title>
        </Caption>
        {Boolean(o?.list?.length) && (
          <Ul>
            {o?.list.map((o, i) => (
              <Li key={i}>{o}</Li>
            ))}
          </Ul>
        )}
      </Container>
    ))}
  </>
);
