import React from "react";
import Carousel from "react-elastic-carousel";
import {
  Item,
  SlideTitle,
  SlideImage,
  ButtonWrapper,
  StyledButton
} from "./Slider.styled";
import prevIcon from "assets/icons/left-arrow.svg";
import nextIcon from "assets/icons/right-arrow.svg";
import hands from "assets/images/rece.png";
import breakfast from "assets/images/breakfast.png";
import burgers from "assets/images/burgers.png";
import deserts from "assets/images/deserts.png";
import happyMeal from "assets/images/happyMeal.png";
import lemonade from "assets/images/lemonade.png";
import workWithUs from "assets/images/workWithUs.png";
import zestawMocy from "assets/images/zestawMocy.png";

class Slider extends React.Component {
  render() {
    return (
      <React.Fragment>
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
          enableAutoPlay={false}
          autoPlaySpeed={3500}
          showArrows={false}
          pagination={false}
        >
          <Item>
            <SlideTitle>Wspólne powroty smakują lepiej</SlideTitle>
            <SlideImage sliderImage={hands} />
          </Item>
          <Item>
            <SlideTitle>Sprawdź co się zmieniło</SlideTitle>
            <SlideImage sliderImage={burgers} />
          </Item>
          <Item>
            <SlideTitle>Lato McCafe!</SlideTitle>
            <SlideImage sliderImage={lemonade} />
          </Item>
          <Item>
            <SlideTitle>Skuś sie na desery czeko-wiśniowe!</SlideTitle>
            <SlideImage sliderImage={deserts} />
          </Item>
          <Item>
            <SlideTitle>We Bare Bears</SlideTitle>
            <SlideImage sliderImage={happyMeal} />
          </Item>
          <Item>
            <SlideTitle>McZestaw Mocy</SlideTitle>
            <SlideImage sliderImage={zestawMocy} />
          </Item>
          <Item>
            <SlideTitle>
              McMuffin® Twarozek i Rzodkiewka. Tradycyjny smak śniadań w nowym
              wydaniu!
            </SlideTitle>
            <SlideImage sliderImage={breakfast} />
          </Item>
          <Item>
            <SlideTitle>Pracuj razem z nami w McDonalds</SlideTitle>
            <SlideImage sliderImage={workWithUs} />
          </Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Slider;
