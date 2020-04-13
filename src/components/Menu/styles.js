import {StyleSheet} from 'react-native';
import styled from 'styled-components';

export const Container = styled.ScrollView `
    margin: 0 30px;
`;

export const Code = styled.View `
    background: #FFF;
    padding: 10px;
    align-self: center;
`;

export const Nav = styled.View `
    margin-top: 80px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, .8);
`;

export const NavItem = styled.View `
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, .8);
`;

export const NavText = styled.Text `
    font-size: 15px;
    margin-left: 20px;
    color: #FFF;
`;

export const SignOutButton = styled.TouchableOpacity `
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, .8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 30px;
`;

export const SignOutButtonText = styled.Text `
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;