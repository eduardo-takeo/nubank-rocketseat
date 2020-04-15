import React from 'react';

import {Container, TabsContainer, TabItem, TabText} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tabs = ({translateY}) => {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 400],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                }),
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 400],
                outputRange: [1, 0.3],
                extrapolate: 'clamp',
            }),
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='person-add' size={24} color='#FFF' />
                    <TabText>Indicar amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='chat-bubble-outline' size={24} color='#FFF' />
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='arrow-downward' size={24} color='#FFF' />
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='arrow-upward' size={24} color='#FFF' />
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon theme={{ iconFamily: 'MaterialIcons' }} name='lock' size={24} color='#FFF' />
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}

export default Tabs
