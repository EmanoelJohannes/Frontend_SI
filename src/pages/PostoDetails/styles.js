import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';

export const ItemMenu = styled(RectButton)`
    padding: 10px;
    background:  ${props => props.active ? '#142b' : '#692b'};
    margin: 3px;
    border-radius: 5px;
`;

export const ItemText = styled.Text`
    color: white;
`;

export const SubmitButton = styled(Button).attrs({
    title: "Marcar Atendimento",
    buttonStyle: {
        backgroundColor: '#692b',
        minWidth: 100,
        marginBottom: 10
    },
})`

`;

export const Container = styled.View`
    flex: 1;
    padding: 0 30px;
`;

export const Title = styled.Text`
    color: #2c692b;
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
`;

export const TitleLabel = styled.Text`
    color: #2c692b;
    font-size: 18px;
    font-weight: bold;
    margin: 0px 0;
`;


export const SecondaryTitle = styled.Text`
    color: #2c692b;
    font-size: 16px;
`;

export const Label = styled.Text`
    color: #333;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.2);
    margin-top: 3px;
    margin-bottom: 12px;
    align-self: center
`;