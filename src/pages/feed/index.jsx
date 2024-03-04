import React from 'react'
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo name="Luana Martins" image="https://avatars.githubusercontent.com/u/38231334?v=4" percentual={25}/>
                <UserInfo name="Luana Martins" image="https://avatars.githubusercontent.com/u/38231334?v=4" percentual={65}/>
                <UserInfo name="Luana Martins" image="https://avatars.githubusercontent.com/u/38231334?v=4" percentual={45}/>
                <UserInfo name="Luana Martins" image="https://avatars.githubusercontent.com/u/38231334?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 