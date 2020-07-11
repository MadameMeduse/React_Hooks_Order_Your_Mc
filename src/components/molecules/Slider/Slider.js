import React from "react";
import Carousel from "react-elastic-carousel";
import {
  Item,
  SlideTitle,
  SlideImage,
  StyledButton,
  ButtonWrapper
} from "./Slider.styled";
import hands from "assets/images/rece.png";
import slide1 from "assets/images/Slide_1.png";
import slide2 from "assets/images/Slide_2.png";
import slide3 from "assets/images/Slide_3.png";
import slide4 from "assets/images/Slide_4.png";
import slide5 from "assets/images/Slide_5.png";
import slide6 from "assets/images/Slide_6.png";
import slide7 from "assets/images/Slide_7.png";
import prevIcon from "assets/icons/left-arrow.svg";
import nextIcon from "assets/icons/right-arrow.svg";

class Slider extends React.Component {
  render() {
    return (
      <>
        <ButtonWrapper>
          <StyledButton
            icon={prevIcon}
            onClick={() => this.carousel.slidePrev()}
          ></StyledButton>
          <StyledButton
            icon={nextIcon}
            onClick={() => this.carousel.slideNext()}
          ></StyledButton>
        </ButtonWrapper>
        <Carousel
          ref={ref => (this.carousel = ref)}
          SliderItemsToShow={1}
          enableAutoPlay
          autoPlaySpeed={3500}
          showArrows={false}
          pagination={false}
        >
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={hands} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide1} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide2} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide3} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide4} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide5} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide6} />
          </Item>
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={slide7} />
          </Item>
        </Carousel>
      </>
    );
  }
}

export default Slider;
