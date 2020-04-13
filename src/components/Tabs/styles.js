import styled from 'styled-components';

export const Container = styled.View `
    height: 100px;
    margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        paddingLeft: 10, 
        paddingRight: 20
    }, 
    showsHorizontalScrollIndicator: false,
}) `
    
`;

export const TabItem = styled.View `
    width: 90px;
    height: 90px;
    background: rgba(255, 255, 255, .2);
    border-radius: 3px;
    padding: 10px;
    margin-right: 10px;
    justify-content: space-between;
`;

export const TabText = styled.Text `
    font-size: 13px;
    color: #FFF;
`;