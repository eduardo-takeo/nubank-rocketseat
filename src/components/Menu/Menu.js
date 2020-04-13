import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

const Menu = () => {
    return (
        <Container>
            <Code>
                <QRCode
                    value='https://nubank.com.br/'
                    size={80}
                    backgroundColor='#FFF'
                    color='#8B10AE'
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='help-outline' size={20} color='#FFF' />
                    <NavText>Me ajude</NavText>
                </NavItem>
                <NavItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='person-outline' size={20} color='#FFF' />
                    <NavText>Meu perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='credit-card' size={20} color='#FFF' />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='smartphone' size={20} color='#FFF' />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}

export default Menu
