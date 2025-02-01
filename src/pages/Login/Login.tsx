import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const USERS = [
  {
    "id": 1,
    "name": "Deepti Aggarwal",
    "email": "deepti.aggarwal@aspire.com",
    "username": "deepti01",
    "password": "deepti01"
  },
  {
    "id": 2,
    "name": "Nirbhay Singh",
    "email": "nirbhay.singh@aspire.com",
    "username": "nirbhay01",
    "password": "nirbhay01"
  },
  {
    "id": 3,
    "name": "Apoorva Srinivasan",
    "email": "apoorva.rinivasan@aspire.com",
    "username": "apoorva01",
    "password": "apoorva01"
  },
  {
    "id": 4,
    "name": "Ashish Tyagi",
    "email": "ashish.tyagi@aspire.com",
    "username": "ashish01",
    "password": "ashish01"
  },
  {
    "id": 5,
    "name": "Sajan S",
    "email": "sajan.s@aspire.com",
    "username": "sajan01",
    "password": "sajan01"
  },
  {
    "id": 6,
    "name": "Admin",
    "email": "admin@aspire.com",
    "username": "admin",
    "password": "admin"
  }
]

const Login: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    let userExist = USERS.filter(user => (user.username == username && user.password == password));

    if (userExist) {
      navigate('/dashboard', { state: { user: userExist[0] } });
    } else {
      console.log('Invalid credentials');
    }
  };
  
  return (
    <LoginSection aria-labelledby="login-title">
      <LoginContainer>
        <LoginContentContainer>
          <Circle className="login--circle login--circle--one" aria-hidden="true" />
          <FormContainer>
            <Illustration
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="Illustration of login process"
              className="login__image-illustration"
            />
            <Title>LOGIN</Title>
            <Form onSubmit={submitHandler} aria-describedby="login-title">
              <label htmlFor="username" className="visually-hidden">Username</label>
              <Input 
                id="username"
                type="text"
                placeholder="USERNAME"
                className="login__form-input"
                ref={usernameRef}
                required
              />

              <label htmlFor="password" className="visually-hidden">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="PASSWORD"
                className="login__form-input"
                ref={passwordRef}
                required
              />
              <Button type="submit">SUBMIT</Button>
            </Form>
            <div className="login__forget">
              <ForgotLink href="">FORGOT PASSWORD</ForgotLink>
            </div>
          </FormContainer>
          <Circle className="login--circle login--circle--two" aria-hidden="true" />
        </LoginContentContainer>
      </LoginContainer>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  margin: 0;
  box-sizing: border-box;
  font-family: "poppins";
  color: #ffffff;
  letter-spacing: 1px;
  transition: background 0.2s ease;
  -webkit-transition: background 0.2s ease;
  -moz-transition: background 0.2s ease;
  -ms-transition: background 0.2s ease;
  -o-transition: background 0.2s ease;

  .login__image-illustration {
    position: absolute;
    top: -14%;
    right: -2px;
    width: 90%;
  }

  .login--circle {
    width: 8rem;
    height: 8rem;
    background: #fe414dc4;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: absolute;
  }

  .login--circle--one {
    top: 0;
    left: 0;
    z-index: -1;
    transform: translate(-45%, -45%);
    -webkit-transform: translate(-45%, -45%);
    -moz-transform: translate(-45%, -45%);
    -ms-transform: translate(-45%, -45%);
    -o-transform: translate(-45%, -45%);
  }

  .login--circle--two {
    bottom: 0;
    right: 0;
    z-index: -1;
    transform: translate(45%, 45%);
    -webkit-transform: translate(45%, 45%);
    -moz-transform: translate(45%, 45%);
    -ms-transform: translate(45%, 45%);
    -o-transform: translate(45%, 45%);
  }

  .login__forget {
    margin: 1rem 0;
    display: flex;
    justify-content: end;
  }

  .login--opacity {
    opacity: 0.6;
  }

  .visually-hidden {
    visibility: hidden;
    height:0px;
  }

  @media (min-width: 577px) {
    
  }
`;

const Illustration = styled.img`
  /* Add your styles here */
`;

const Form = styled.form`
  /* Add your styles here */
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContentContainer = styled.div`
  position: relative;
  width: 22.2rem;
`;

const FormContainer = styled.div`
  border: 1px solid hsla(0, 0%, 65%, 0.158);
  box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(20px);
  z-index: 99;
  padding: 2rem;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fe414dc4;
`;

const Input = styled.input`
  display: block;
  padding: 14.5px;
  width: 100%;
  margin: 0 0 1.3rem;
  color: #fe414d;
  outline: none;
  background-color: #9191911f;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: 0.8px;
  font-size: 15px;
  backdrop-filter: blur(15px);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;

  &:focus {
    box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);
    animation: wobble 0.3s ease-in;
    -webkit-animation: wobble 0.3s ease-in;
  }
`;

const Button = styled.button`
  background-color: #fe414dc4;
  color: #ffffff;
  display: block;
  padding: 13px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  letter-spacing: 1.5px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.1s ease-in-out;
  border: none;
  margin-top: 2rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -ms-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    transform: scale(1.02);
    -webkit-transform: scale(1.02);
    -moz-transform: scale(1.02);
    -ms-transform: scale(1.02);
    -o-transform: scale(1.02);
  }
`;

const ForgotLink = styled.a`
  text-decoration: none;
  color: #fe414dc4;
`;

const Circle = styled.div`
  /* Add your styles here */
`;