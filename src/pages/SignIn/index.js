import React, { useRef, useState } from 'react';
import { Image, View, Alert } from 'react-native';
import Background from '../../components/Background';
import {AsyncStorage} from 'react-native';


import { Container, Form, FormInput, SubmitButton, Separator, SignLink, SignLinkText } from './styles';

import vacinacao_logo from '../../assets/images/vacinacao_logo.png';
import unb from '../../assets/images/unb.png';
import gdf_saude from '../../assets/images/gdf-saude.png';

import api from '../../services/api';


export default function SignIn({ navigation }) {

  const senhaRef = useRef();
  
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    const response = await api.post('/sessions', { login, senha });
    
    if (!response.data.error) {
      const user = response.data.user[0];

      await AsyncStorage.setItem(
        '@user', JSON.stringify(user)
      );
      
      setLoading(false);

      navigation.navigate("Main", {user});

    } else {
      Alert.alert("Ops", response.data.error);
      setLoading(false);

    }
    
  }

  // const loading = useSelector(state => state.auth.loading);

  return (
    <Background>
      <Container>
        <Image style={{ width: 260, height: 200 }} source={vacinacao_logo} />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{ width: 80, height: 45, marginRight: 5 }} source={unb} />
          <Separator />
          <Image resizeMode="contain" style={{ width: 70, height: 70, marginLeft: 5 }} source={gdf_saude} />
        </View>

        <Form>
          <FormInput
            icon="input"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholder="Login"
            returnKeyType="next"
            onSubmitEditing={() => senhaRef.current.focus()}
            value={login}
            onChangeText={setLogin}
            color="#00894a"
            placeholderTextColor="#aaa" 
          />

          <FormInput
            icon="lock-outline"
            placeholder="Senha"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry
            ref={senhaRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
            color="#00894a"
            placeholderTextColor="#aaa" 
          />

          <SubmitButton loading={loading} onPress={handleSubmit} />
        </Form>

        <SignLink style={{marginBottom: 10}} onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>

  );
}
