import styled from 'styled-components';
import Anuncement from '../components/Anuncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.div`
  font-size: 1.3rem;
  margin-right: 1rem;
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
`;
const Option = styled.option`
  padding: 10px;
`;
const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Anuncement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>black</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XL</Option>
            <Option>M</Option>
            <Option>XSL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              PRICE
            </Option>
            <Option>Newest</Option>
            <Option>Higher</Option>
            <Option>Lower</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
