import React from 'react';
import {StatusBar, Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Tabs from '../../components/Tabs/Tabs';

import {Container, Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation} from './styles';

const Main = () => {
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                }
            }
        ],
        {useNativeDriver: true},
    )

    function onHandlerStateChange(event) {

    }

    return (
        <>
            <StatusBar backgroundColor='#8B10AE' barStyle='light-content' />
            <Container>
                <Header />

                <Content>
                    <Menu translateY={translateY} />

                    <PanGestureHandler
                        onGestureEvent={animatedEvent}
                        onHandlerStateChange={onHandlerStateChange}
                    >
                        <Card style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 400],
                                    outputRange: [-50, 0, 400],
                                    extrapolate: 'clamp',
                                })
                            }]
                        }}>
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
                    </PanGestureHandler>
                </Content>

                <Tabs translateY={translateY} />
            </Container>
        </>
    )
}

export default Main
