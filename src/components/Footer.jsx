import React from 'react';
import styled from 'styled-components';
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
/*left section */
const Logo = styled.h1``;
const Desc = styled.div`
  font-size: 1.2rem;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #${(props) => props.bg};
  margin: 5px;
  border-radius: 50%;
`;

/*end left section */
const Center = styled.div`
  padding: 20px;
  flex: 1;
`;
/* start center section */
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
/*end center section */
const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
/* right elements */

const ContactItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
/*end of right elements */
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GitEcom.</Logo>
        <Desc>
          our website is specialist in clothes and in new trends to keep all of
          our clients happy,and everyday we try to deliver best poducts
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItems>
          <Room style={{ marginRight: '10px' }} />
          Souk Sebt Ouled Nemma,Rue 16 N113
        </ContactItems>
        <ContactItems>
          <Phone style={{ marginRight: '10px' }} />
          +212634185234
        </ContactItems>
        <ContactItems>
          <Email style={{ marginRight: '10px' }} />
          yahyakharbach9@gmal.com
        </ContactItems>
      </Right>
    </Container>
  );
};

export default Footer;
