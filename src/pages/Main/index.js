import React from 'react';
import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs/Tabs';

import {Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation} from './styles';

const Main = () => {
    return (
        <>
            <StatusBar backgroundColor='#8B10AE' barStyle='light-content' />
            <Container>
                <Header />

                <Content>
                    <Card>
                        <CardHeader>
                            <Icon theme={{ iconFamily: 'MaterialIcons' }} name='attach-money' size={28} color='#666' />
                            <Icon theme={{ iconFamily: 'MaterialIcons' }} name='visibility-off' size={28} color='#666' />
                        </CardHeader>
                        <CardContent>
                            <Title>Saldo disponível</Title>
                            <Description>R$965.345,87</Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>Transferência de R$50,00 recebida de Eduardo Higashi hoje às 17:45</Annotation>
                        </CardFooter>
                    </Card>
                </Content>

                <Tabs />
            </Container>
        </>
    )
}

export default Main
