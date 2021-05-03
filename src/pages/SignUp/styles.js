import { Platform, ScrollView, Picker } from 'react-native';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import { Button } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'height'
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;

`;

export const PickerSexo = styled(Picker)`
    height: 46px;
    background: rgba(0, 0, 0, 0.1);
    margin-top: 10px;
`;

export const Label = styled.Text`
    font-size: 14px;
    color: #fff;
    text-align: left;
`;

export const PickerItem = styled(Picker.Item)`
`;

export const Form = styled.View`
    margin-top: 0px;

`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button).attrs({
  title: "Cadastrar",
  buttonStyle: {
    backgroundColor: '#00894a',
    marginTop: 0,
    marginBottom: 10
  },
})`

`;

export const SignLink = styled.TouchableOpacity`
`;

export const SignLinkText = styled.Text`
    color: #00894a;
    font-weight: bold;
    font-size: 16px;
`;

export const Title = styled.Text`
    color: #00894a;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 0px;
`;

export const Image = styled.Image`
    margin: 0;
    padding: 0;
`;

export const SelectCityInput = styled(RectButton)`
    padding: 0 15px;
    height: 46px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    flex-direction: row;
    align-items: center;
`;


export const Scroll = styled.View`
    max-height: 340px;
`;

