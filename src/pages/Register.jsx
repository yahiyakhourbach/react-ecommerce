import styled from 'styled-components';

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
  width: 40%;
`;

const Title = styled.h1``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap; ;
`;

const Input = styled.input`
  flex: 2;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid lightgray;
`;

const Agrement = styled.div`
  margin: 20px 0px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  color: #fff;
`;
const Register = () => {
  return (
    <Container>
      <Wraper>
        <Title>Creat Your Account</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agrement>
            by creating this account i agree to the terms and condition of this
            website
          </Agrement>
          <Button>Create Account</Button>
        </Form>
      </Wraper>
    </Container>
  );
};

export default Register;
