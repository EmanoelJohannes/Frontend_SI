import styled from 'styled-components/native';

import Input from '../../components/InputSigned';
import { Button } from 'react-native-elements';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 20},
})`
    align-self: stretch;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
    border: ${props => props.value ? 0 : '1px solid #FF4B4D'};
    color: #FF4B4D;

`;

export const SubmitButton = styled(Button).attrs({
    title: "Atualizar perfil",
    buttonStyle: {
        backgroundColor: '#00894a',
        marginTop: 10
    },
})`

`;

export const Separator = styled.View`
    height: 1px;
    background: rgba(0, 0, 0, 0.4);
    margin: 20px 0 30px;
`;

export const Advise = styled.View`
    background: #FF4B4D;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
`;

export const TextAdvise = styled.Text`  
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    align-self: center;
`;