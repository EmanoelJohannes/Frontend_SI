import React, { useState, useEffect } from 'react';

import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import Background from '../../components/BackgroundSigned';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    ActionContainer,
    RightSide,
    TextWrapper,
    LabelWrapper,
    Wrapper,
    Label,
    ActionList,
    ContainerList,
    ContainerText,
    StatusWrapper
} from './styles';

export default function Marcacoes({ navigation }) {

    const user = JSON.parse(navigation.getParam('user'));

    const [marcacoes, setMarcacoes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadMarcacoes() {

            setLoading(true);
            console.log('response');

            const response = await api.get(`marcacoes/${user.id}`);
            if (response.data) {
                setMarcacoes(response.data[0]);
                setLoading(false);
            }     

        }
        loadMarcacoes();
    }, []);

    return (
        <Background>

            <Container>

                {marcacoes ? 
                
                <View>
                    {loading ? (<ActivityIndicator color="#333" />) : (
                        <ContainerList>
                        <ActionContainer onPress={() => {navigation.navigate("MapPostoAgendado", {lat: marcacoes.lat, lng: marcacoes.lng, descricao: marcacoes.descricao})}}>                                                
                            <RightSide>
                                <Wrapper>
                                    <LabelWrapper>
                                        <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
                                            <Label style={{marginBottom: 5}}>{marcacoes.descricao}</Label>                                         
                                        </View>                                            

                                        <ContainerText>
                                            <View style={{flexDirection: 'row'}}>
                                                <Icon name="date-range" size={15} color={'#2c692b'}/>
                                                <TextWrapper>Horário marcado: {marcacoes.data_formatada} </TextWrapper>
                                            </View>
                                        </ContainerText>
                                    </LabelWrapper>
                                </Wrapper>
                            </RightSide>
                        </ActionContainer>
                    </ContainerList>
                    )}

                </View>
                :

                <View style={{padding: 30}}>
                    <Text style={{color: '#2c692b', fontSize: 30, marginBottom: 20}}>
                    Ops! <IconMaterial name="emoticon-sad-outline" size={30}/>
                    </Text>
                    <Text style={{fontSize: 20}}>Você ainda não marcou sua vacinação.</Text>
                </View>
            }

            </Container>
        </Background>
    )
}

Marcacoes.navigationOptions = ({navigation}) =>  ({
  title: 'Minhas Marcações',
  headerTitleStyle: {color: '#2c692b'},
  headerLeft: () => (
    <TouchableOpacity style={{marginLeft: 20}} onPress={() => {navigation.goBack()}}>
      <Icon name="chevron-left" size={30} color="#2c692b" />
    </TouchableOpacity>
  )
});