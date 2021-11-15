import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import Category from './Category';

const Container = styled.div`
  display: flex;
  padding: 20px;
  jusctify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Categoreize = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} />
      ))}
    </Container>
  );
};

export default Categoreize;
