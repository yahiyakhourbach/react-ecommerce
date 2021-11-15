import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  background: linear-gradient(
      rgba(227, 201, 206, 0.5) 10%,
      rgba(236, 203, 220, 0.5) 75%
    ),
    url('../images/background.jpg') center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wraper = styled.div`
  background-color: white;
  padding: 20px;
  width: 20%;
  ${mobile({ width: '70%' })}
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: #fff;
`;
const Link = styled.a`
  margin: 10px 0px;
  text-decoration: underline;
`;
const Login = () => {
  return (
    <Container>
      <Wraper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="password" />
          <Link>DO NOT REMEMBER PASSWORD</Link>
          <Link>CREATE AN ACCOUNT</Link>
          <Button>Create Account</Button>
        </Form>
      </Wraper>
    </Container>
  );
};

export default Login;
