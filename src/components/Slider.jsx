import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { slideItems } from '../data.js';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  top: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  z-index: 1000;
`;
const Wraper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height:100%
  flex: 1;
`;
const Image = styled.img`
  max-height: 40rem;
`;
const InfoContianer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 5rem;
`;
const Paragrah = styled.p`
  margin: 5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 2rem;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlide] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlide(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlide(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    console.log(slideIndex);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wraper slideIndex={slideIndex}>
        {slideItems.map((item) => {
          return (
            <Slide bg={item.bg} key={item._id}>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContianer>
                <Title>{item.title}</Title>
                <Paragrah>{item.desc}</Paragrah>
                <Button>SHOP NOW</Button>
              </InfoContianer>
            </Slide>
          );
        })}
      </Wraper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
