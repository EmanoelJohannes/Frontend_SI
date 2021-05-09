import React, {useEffect, useState} from 'react';
import { View, ScrollView, PermissionsAndroid, Modal, StyleSheet, TouchableHighlight, Text, Linking } from 'react-native';
// import { signOut } from '~/store/modules/auth/actions';
// import { useDispatch, useSelector } from 'react-redux';
// import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/BackgroundSigned';

import { Container, OptionsList, ItemContainer, Item, ContentIcon, Label } from './styles';

import {AsyncStorage} from 'react-native';

export default function ConfigurationMenu({navigation}) {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        async function getUser(){
            const userData = await AsyncStorage.getItem('@user');

            setUser(userData);

        }

        getUser();
    }, []);

    return (        
    <Background>
        <Container>

            <OptionsList>
                <ItemContainer>
                    <Item onPress={() => navigation.navigate('Profile', {user: user})}>
                        <ContentIcon><Icon size={20} name="person" color="#2c692b" /></ContentIcon>
                        <Label>Meu perfil</Label>
                    </Item>
                </ItemContainer>

                <ItemContainer>
                    <Item onPress={() => navigation.navigate('Marcacoes', {user: user})}>
                        <ContentIcon><Icon size={20} name="assignment" color="#2c692b" /></ContentIcon>
                        <Label>Marcações</Label>
                    </Item>
                </ItemContainer>

                <ItemContainer>
                    <Item onPress={() => navigation.navigate('Sobre')}>
                        <ContentIcon><Icon size={20} name="help" color="#2c692b" /></ContentIcon>
                        <Label>Sobre</Label>
                    </Item>
                </ItemContainer>
                
                <ItemContainer>
                    <Item onPress={() => navigation.navigate('SignIn')}>
                        <ContentIcon><Icon size={20} name="close" color="#2c692b" /></ContentIcon>
                        <Label>Sair</Label>
                    </Item>
                </ItemContainer>           
            </OptionsList>

        </Container>
    </Background>

  );
}


ConfigurationMenu.navigationOptions = ({navigation}) =>  ({
    title: 'Menu de configuração',
    headerTitleStyle: {color: '#2c692b'},
    // headerLeft: () => (
    //   <TouchableOpacity >
    //     <Icon name="chevron-left" size={20} color="#2c692b" />
    //   </TouchableOpacity>
    // )
});