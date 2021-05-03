import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import { Button } from 'react-native-elements';

export const SubmitButton = styled(Button).attrs({
    title: "Entrar",
    buttonStyle: {
        backgroundColor: '#00894a',
        marginTop: 5,
    },
})`
       
`;

export const Container = styled.KeyboardAvoidingView.attrs({
    enable: Platform.OS === 'ios',
    behavior: 'height'
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.View`
    align-self: stretch;   
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
    margin-top: 50px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SignLink = styled.TouchableOpacity`
    margin-top: 10px;
`;

export const SignLinkText = styled.Text`
    color: #00894a;
    font-weight: bold;
    font-size: 16px;
`;

export const Separator = styled.View`
    width: 1px;
    height:30px;
    background: rgba(0, 0, 0, 0.2);
    margin: 0 5px;
`;

export const Bottom = styled.TouchableOpacity`
    
`;