import React, { useState } from 'react';
import styled from 'styled-components';
import { authWithEmail, registration, authGithub } from '../store/auth/actions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { message } from 'antd';
import { ROOT_ROUTE } from '../constants';
import withIsMobile from '../HOCs/withIsMobil';

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: 0 auto;
  margin-top: 100px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0 3px;
    padding: 5px 50px;
    margin-bottom: 10px;
    border: none;
  }
`;

const Input = styled.input`
  margin-bottom: 5px;
`;

const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const Title = styled.h4`
  text-align: center;
`;

const Login = props => {
  const [valueLogin, setLogin] = useState('v@gmail.com');
  const [valuePass, setPass] = useState('123456');
  const onChangeLogin = e => setLogin(e.target.value);
  const onChangePass = e => setPass(e.target.value);
  const { authWithEmail, registration, authGithub } = props;
  const login = authFunction => {
    authFunction(valueLogin, valuePass).then(res => {
      if (res) {
        message.success('Пользователь авторизорован');
        setTimeout(() => {
          props.history.push(`${ROOT_ROUTE}/messenger`);
        }, 1000);
      } else {
        message.error('Произошла ошибка c авторизацией');
      }
    });
  };

  return (
    <Wrapper>
      <Title>Little messenger</Title>
      <Input
        value={valueLogin}
        placeholder="Введите логин"
        onChange={e => onChangeLogin(e)}
      />
      <Input
        value={valuePass}
        placeholder="Введите пароль"
        onChange={e => onChangePass(e)}
      />
      <Button variant="outline-success" onClick={() => login(authWithEmail)}>
        Войти
      </Button>
      <WrapperButtons>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => login(authGithub)}
        >
          Гитхаб
        </Button>
        <Button
          variant="outline-info"
          size="sm"
          onClick={() => login(registration)}
        >
          Регистрация
        </Button>
      </WrapperButtons>
    </Wrapper>
  );
};

const mapStateFromProps = ({ authStore }) => ({ authStore });

const mapDispatchToProps = {
  authWithEmail,
  registration,
  authGithub,
};

export default withIsMobile(
  connect(mapStateFromProps, mapDispatchToProps)(Login)
);
