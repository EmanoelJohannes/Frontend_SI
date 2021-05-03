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


// import { useDispatch, useSelector } from 'react-redux';
// import { signUpRequest } from '~/store/modules/auth/actions';


export default function SignUp({ navigation }) {

  const [loading, setLoading] = useState(false);

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [registro, setRegistro] = useState('');
  const [agente, setAgente] = useState(false);

  const loginRef = useRef();
  const senhaRef = useRef();
  const confirmSenhaRef = useRef();

  async function handleCriarConta() {
    
    setLoading(true);

    if (senha.length < 6) {
      Alert.alert("Ops", "A senha deve ter pelo menos 6 caracteres!");
      setLoading(false);

    } else if (login == '') {
      Alert.alert("Ops", "Por favor, preencha o campo de login.");
      setLoading(false);

    } else {
      if (senha == confirmSenha) {

        const response = await api.post('users', {nome, login, senha, agente, registro});

        if (!response.data.error) {
          setLoading(false);
          Alert.alert("Sucesso", "Obrigado por se cadastrar!");
          navigation.navigate("SignIn");
        } else {
          Alert.alert("Erro", response.data.error);
          setLoading(false);
        }
        
        

      } else {
        Alert.alert("Ops", "A confirmação de senha está incorreta.");
        setLoading(false);
      }
    }

  }

  return (
    <Background>

      <Container>
        <Image resizeMode="contain" style={{ width: 200, height: 150 }} source={vacinacao_logo} />

        <Form>
          <Title>Lembre-se de confirmar seu e-mail após a inscrição. Obrigado por se cadastrar!</Title>

          <Scroll>
            <ScrollView>
              <FormInput
                icon="person-outline"
                autoCorrect={false}
                placeholder="Nome completo"
                returnKeyType="next"
                onSubmitEditing={() => loginRef.current.focus()}
                value={nome}
                onChangeText={setNome}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />

              <FormInput
                icon="account-box"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Login"
                returnKeyType="next"
                ref={loginRef}
                onSubmitEditing={() => senhaRef.current.focus()}
                value={login}
                onChangeText={setLogin}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />

              <FormInput
                icon="lock-outline"
                secureTextEntry
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Senha"
                returnKeyType="next"
                ref={senhaRef}
                onSubmitEditing={() => confirmSenhaRef.current.focus()}
                value={senha}
                onChangeText={setSenha}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />

              <FormInput
                icon="lock-outline"
                secureTextEntry
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Confirme a senha"
                returnKeyType="next"
                value={confirmSenha}
                onChangeText={setConfirmSenha}
                ref={confirmSenhaRef}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />


            {/* <Label>Sou um agente da saúde responsável pelo cadastramento de postos.</Label> */}

            <CheckBox
                style={{ flex: 1, padding: 10 }}
                onClick={() => {
                setAgente(!agente)
                }}
                isChecked={agente}
                leftText={"Sou um agente da saúde responsável pelo cadastramento de postos."}
                leftTextStyle={{ color: '#444' }}
                checkBoxColor={'#444'}
            />

            {agente && 
              <FormInput
                autoCapitalize="none"
                keyboardType="default"
                placeholder="Digite seu registro."
                returnKeyType="next"
                value={registro}
                onChangeText={setRegistro}
                color="#00894a"
                placeholderTextColor="#aaa" 
              />
            }
            


            </ScrollView>
          </Scroll>

          <SubmitButton loading={loading} onPress={handleCriarConta} />

        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possuo conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>

  );
}
