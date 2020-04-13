import React from 'react';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

const Header = () => {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Eduardo</Title>
            </Top>
            <Icon theme={{ iconFamily: 'MaterialIcons' }} name="keyboard-arrow-down" size={30} color="#FFF" />
        </Container>
    )
}

export default Header
