import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 5rem;
  margin: 5px;
  ${mobile({ fontSize: '4rem' })}
`;
const Desc = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 10px;
  ${mobile({ fontSize: '1.5rem', textAlign: 'center' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1.3rem;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: #fff;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourits products.</Desc>
      <InputContainer>
        <Input placeholder="enter you email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
