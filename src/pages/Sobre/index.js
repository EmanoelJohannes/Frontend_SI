import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Title, TitleLabel, Label } from '../PostoDetails/styles';

export default function Sobre({navigation}) {

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Title >VacinAção</Title>

            <Label style={{color: '#222'}}>Aplicativo criado para a disciplina <Label style={{fontWeight: 'bold'}}>Sistemas de Informação</Label>, pelos alunos da <Label style={{fontWeight: 'bold'}}>Universidade de Brasília</Label>:{"\n"}{"\n"}- Emanoel Johannes {"\n"}- Gabriel Pinheiro {"\n"}- Eduardo Assis {"\n"}- Alexandre Souza {"\n"}- Gabriel de Sousa</Label>

            
            </ScrollView>
        </Container>
    );
}

Sobre.navigationOptions = ({navigation}) =>  ({
    title: 'Sobre',
    headerTitleStyle: {color: '#2c692b'},
    headerLeft: () => (
      <TouchableOpacity style={{marginLeft: 20}} onPress={() => {navigation.goBack()}}>
        <Icon name="chevron-left" size={30} color="#2c692b" />
      </TouchableOpacity>
    )
  });
