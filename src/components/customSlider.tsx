import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SC from '@emotion/styled';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';
import React from 'react';
import Slider from 'react-slick';

import {maxDevice} from '../styles';

const Controls = SC.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 140px 0 140px;
  @media ${maxDevice.tablet} {
    padding: 0 30px 0 30px;
  }
`;

const Btn = SC.div`
  height: 2.5rem;
  width: 2.5rem;
`;

type CustomSliderProps = {
  title?: any;
  initialSlide?: number;
  children?: any;
  withControls?: boolean;
  centerMode?: boolean;
  responsive?: any;
};

export const CustomSlider = ({withControls = true, initialSlide = 0, children, ...props}: CustomSliderProps) => {
  const slider: any = React.useRef();
  const [hasSetPosition, setHasSetPosition] = React.useState(false);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide,
    ...props,
  };

  React.useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current?.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  return (
    <>
      {withControls && (
        <Controls>
          <Btn onClick={slider.current?.slickPrev}>
            <ArrowBackIos />
          </Btn>
          <Btn onClick={slider.current?.slickNext}>
            <ArrowForwardIos />
          </Btn>
        </Controls>
      )}
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </>
  );
};
