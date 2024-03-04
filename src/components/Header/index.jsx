import React from 'react'
import Logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({ autenticado }) => {

  const navigate = useNavigate();

  const toLogin = () =>{
      navigate('/login')
  };

  const createAccount = () =>{
      navigate('/create')
  };
  
  return (
      <Wrapper>
          <Container>
              <Row>
                  <img src={Logo} alt="Logo DIO" />
                  {autenticado ? (
                      <>
                          <BuscarInputContainer>
                              <Input placeholder="Buscar..." />
                          </BuscarInputContainer>
                          <Menu>Live Code</Menu>
                          <Menu>Global</Menu>
                      </>
                  ) : null}
              </Row>
              <Row>
                  {autenticado ? (
                      <UserPicture src="https://avatars.githubusercontent.com/u/79718740?s=400&u=a81131afdb7fd141923534501830af3a059cc4cf&v=4" />
                  ) : (
                      <>
                          <MenuRight href="#">Home</MenuRight>
                          <Button title={"Entrar"} onClick={toLogin} />
                          <Button title={"Cadastrar"}  onClick={createAccount}/>
                      </>
                  )}
              </Row>
          </Container>
      </Wrapper>
  );
};

export { Header };