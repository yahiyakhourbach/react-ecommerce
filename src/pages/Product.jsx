import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Anuncement from '../components/Anuncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  margin-right: 20px;
  flex: 1;
  ${mobile({ display: 'flex', justifyContent: 'center', marginRight: '0px' })}
`;

const Image = styled.img`
  ${mobile({ width: '300px' })}
`;

const INfoProducts = styled.div`
  margin: 0px auto;
  flex: 1;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 100;
  ${mobile({ fontSize: '1.4rem', marginTop: '20px' })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  width: 700px;
  font-size: 1.3rem;
  ${mobile({ width: '350px' })}
`;

const Price = styled.div`
  font-size: 2.4rem;
`;

const FilterContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  width: 50%;
  justify-content: space-between;
  ${mobile({ width: '100%', paddingRight: '10px' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTtitle = styled.div`
  font-size: 1.3rem;
`;

const FiltetColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid lightgray;
  margin: 0px 5px;
  background-color: ${(props) => props.color};
`;

const Select = styled.select`
  margin: 0px 5px;
  padding: 10px;
  outline: none;
`;

const Option = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AddAmount = styled.div``;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #009acd;
  margin: 0px 5px;
  ${mobile({ margin: '0px 10px' })}
`;

const RemoveAmount = styled.div``;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  width: 250px;
  ${mobile({ width: '200px' })}
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Anuncement />
      <Wrapper>
        <ImageContainer>
          <Image src="./images/product1.jpg" />
        </ImageContainer>
        <INfoProducts>
          <Title>WINTER HOODIES SOFT & SOLID</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Desc>
          <Price>20$</Price>
          <FilterContainer>
            <Filter>
              <FilterTtitle>colors:</FilterTtitle>
              <FiltetColor color="black" />
              <FiltetColor color="yellow" />
              <FiltetColor color="green" />
            </Filter>
            <Filter>
              <FilterTtitle>Size:</FilterTtitle>
              <Select>
                <Option disabled selected>
                  size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <FilterContainer>
            <AmountContainer>
              <RemoveAmount>
                <Remove />
              </RemoveAmount>
              <Amount>1</Amount>
              <AddAmount>
                <Add />
              </AddAmount>
            </AmountContainer>
            <Button>Add To Cart</Button>
          </FilterContainer>
        </INfoProducts>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
