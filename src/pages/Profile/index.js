import React, { useRef, useState, useEffect } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Background from '../../components/BackgroundSigned';

import { Container, Form, FormInput, SubmitButton, Advise, TextAdvise } from './styles';
import { Alert } from 'react-native';

import api from '../../services/api';

function Profile ({navigation}) {

  const profile =  JSON.parse(navigation.getParam('user'));
  
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    async function loadUserName(){
        const response = await api.get(`users/${profile.login}`);
        setNome(response.data[0].nome);
    }
    loadUserName();
  }, [])

  async function handleSubmit () {
    setLoading(true);

    if (nome.length = '') {
      Alert.alert("Ops", "O nome deve estar preenchido");
      setLoading(false);

    } else {

        const response = await api.post('updateUser', {nome, login: profile.login});

        if (!response.data.error) {
          setLoading(false);
          Alert.alert("Sucesso", "Dados atualizados!");
          navigation.navigate("ConfigurationMenu", {user: response.data.user});
        } else {
          Alert.alert("Erro", response.data.error);
          setLoading(false);
        }

    }

  }

  return (
    <Background>
      <Container>
        <Form>
        
          <Text style={{color: '#2c692b', fontWeight: 'bold', marginVertical: 5}}>Nome completo</Text>

          <FormInput 
            icon="account"
            color="#2c692b"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="send"   
            onSubmitEditing={() => loginRef.current.focus()}
            value={nome}
            onChangeText={setNome}         
          />
          
          <Text style={{color: '#2c692b', fontWeight: 'bold', marginVertical: 5}}>Login</Text>

          <FormInput 
            icon="login-variant"
            color="#2c692b"
            editable={false}
            selectTextOnFocus={false}     
            value={profile.login}
          />

          <Text style={{color: '#2c692b', fontWeight: 'bold', marginVertical: 5}}>Perfil</Text>

            {profile.agente ? 
            <FormInput 
                icon="account-circle"
                color="#2c692b"
                editable={false} selectTextOnFocus={false}
                value={"Agente de saúde"} 

            />
            :
            <FormInput 
                icon="account-circle"
                color="#2c692b"
                editable={false} selectTextOnFocus={false}
                value={"Cidadão"} 

            />
        
            }
          

          <SubmitButton loading={loading} onPress={handleSubmit} />        
        </Form>
      </Container>
    </Background>
  );
}


Profile.navigationOptions = ({navigation}) =>  ({
  title: 'Meu perfil',
  headerTitleStyle: {color: '#2c692b'},
  headerLeft: () => (
    <TouchableOpacity style={{marginLeft: 20}} onPress={() => {navigation.goBack()}}>
      <Icon name="chevron-left" size={30} color="#2c692b" />
    </TouchableOpacity>
  )
});

export default Profile;