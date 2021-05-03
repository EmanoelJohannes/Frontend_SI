import React, { useRef, useState } from 'react';
import Background from '../../components/Background';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

import api from '../../services/api'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Scroll,
  Title,
  Image, 
  Label
} from './styles';


import CheckBox from 'react-native-check-box';


import vacinacao_logo from '../../assets/images/vacinacao_logo.png';

export default function CadastrarPosto({ navigation }) {

  const [loading, setLoading] = useState(false);

  const [descricao, setDescricao] = useState('');

  const user = navigation.getParam('user');
  
  async function handleCriarConta() {
    
    setLoading(true);

    if (descricao.length == 0) {
      Alert.alert("Ops", "A descrição é obrigatória!");
      setLoading(false);
    } else {
        const response = await api.post('storePosto', {descricao: descricao, lat: navigation.getParam('lat'), lng: navigation.getParam('lng'), id_usuario: user.id});
        Alert.alert("Sucesso", "Posto cadastrado!");
        setLoading(false);
        // navigation.navigate("SignIn");       
    }

  }

  return (
    <Background>

      <Container>
        <Image resizeMode="contain" style={{ width: 200, height: 150 }} source={vacinacao_logo} />

        <Form>
          <Title>Coloque nas descrição informações referentes à localização do posto.</Title>

          <Scroll>
            <ScrollView>
              <FormInput
                icon="article"
                autoCorrect={false}
                placeholder="Informações gerais sobre localização"
                returnKeyType="next"
                onSubmitEditing={() => loginRef.current.focus()}
                value={descricao}
                onChangeText={setDescricao}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />

            


            </ScrollView>
          </Scroll>

          <SubmitButton loading={loading} onPress={handleCriarConta} />

        </Form>

      </Container>
    </Background>

  );
}
