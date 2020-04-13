import React from 'react';
import {StatusBar} from 'react-native';

import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs/Tabs';

import {Container} from './styles';

const Main = () => {
    return (
        <>
            <StatusBar backgroundColor='#8B10AE' barStyle='light-content' />
            <Container>
                <Header />
                <Tabs />
            </Container>
        </>
    )
}

export default Main
