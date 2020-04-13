import React from 'react';
import {StatusBar} from 'react-native';

import Header from '../../components/Header/Header';

import {Container} from './styles';

const Main = () => {
    return (
        <>
            <StatusBar backgroundColor='#8B10AE' barStyle='light-content' />
            <Container>
                <Header />
            </Container>
        </>
    )
}

export default Main
