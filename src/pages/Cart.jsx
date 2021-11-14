import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Anuncement from '../components/Anuncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Wraper = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  width: 200px;
  font-weight: 600;
  border: ${(props) => props.fill === 'filled' && 'none'};
  background-color: ${(props) =>
    props.fill === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => (props.fill === 'filled' ? 'white' : 'black')};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  margin: 0px 10px;
  font-size: 1.2rem;
  text-decoration: underline;
`;

const Bottom = styled.div`
  display: flex;
  padding: 20px 10px;
`;

const Info = styled.div`
  flex: 3;
`;

const Summery = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid lightgray;
  height: 300px;
  border-radius: 5px;
  margin: 0px 5px;
  flex: 1;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 10px 0px;
`;

const ProductDetials = styled.div`
  display: flex;
  flex: 2;
`;

const PriceDeials = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AmountDetails = styled.div`
  display: flex;
`;

const Amount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  padding: 1px;
  justify-content: center;
  margin: 0px 5px;
  align-items: center;
`;
const Price = styled.div`
  font-size: 1.4rem;
  margin: 0px 10px;
`;
const Image = styled.img`
  width: 100px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const Color = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: darkblue;
  border: 2px solid lightgray;
`;

const Size = styled.span``;

const SummeryTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
`;

const SummeryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: ${(props) => props.type === 'total' && '600'};
`;

const SummaryText = styled.span``;

const SummaryPrice = styled.span``;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  border: none;
  background-color: black;
  color: white;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Anuncement />
      <Wraper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>continue shopping</TopButton>
          <TopTexts>
            <TopText>your wishing list(0)</TopText>
            <TopText>your bag(2)</TopText>
          </TopTexts>
          <TopButton fill="filled">checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetials>
                <Image src="./images/product1.jpg" />
                <Details>
                  <ProductName>
                    <b>product:</b>Hoodies For Winter
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>02349RE0
                  </ProductId>
                  <Color bg="darkblue" />
                  <Size>
                    <b>SIZE:</b>XL
                  </Size>
                </Details>
              </ProductDetials>
              <PriceDeials>
                <AmountDetails>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountDetails>
                <Price>30$</Price>
              </PriceDeials>
            </Product>
            <Hr />
            <Product>
              <ProductDetials>
                <Image src="./images/product1.jpg" />
                <Details>
                  <ProductName>
                    <b>product:</b>Hoodies For Winter
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>02349RE0
                  </ProductId>
                  <Color bg="darkblue" />
                  <Size>
                    <b>SIZE:</b>XL
                  </Size>
                </Details>
              </ProductDetials>
              <PriceDeials>
                <AmountDetails>
                  <Remove />
                  <Amount>2</Amount>
                  <Add />
                </AmountDetails>
                <Price>30$</Price>
              </PriceDeials>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMARY</SummeryTitle>
            <SummeryItem>
              <SummaryText>SubTotal:</SummaryText>
              <SummaryPrice>$ 80</SummaryPrice>
            </SummeryItem>
            <SummeryItem>
              <SummaryText>Estimed Shipping:</SummaryText>
              <SummaryPrice>$ 5.90</SummaryPrice>
            </SummeryItem>
            <SummeryItem>
              <SummaryText>Shipping Discount:</SummaryText>
              <SummaryPrice>$ 2</SummaryPrice>
            </SummeryItem>
            <SummeryItem type="total">
              <SummaryText>Total:</SummaryText>
              <SummaryPrice>$ 83.90</SummaryPrice>
            </SummeryItem>
            <Button>checkout now</Button>
          </Summery>
        </Bottom>
      </Wraper>
      <Footer />
    </Container>
  );
};

export default Cart;
