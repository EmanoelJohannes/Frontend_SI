import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import { Container, Title, TitleLabel, SecondaryTitle, Label, Separator, SubmitButton, ItemMenu, ItemText } from './styles';

export default function PostoDetails({navigation}) {

    const user = navigation.getParam('user');
    const posto = navigation.getParam('posto');

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Title >Descrição</Title>

            {/* <SubmitButton onPress={() => navigation.navigate('EmpresasList', { nucleo} )} /> */}

            <TitleLabel style={{color: '#444'}}>{posto.descricao ? posto.descricao : "Não disponível"}</TitleLabel>


            <Title>Atendimento</Title>

            <View style={{flexDirection: "row"}}>                
                <View style={{flexDirection: "column", width: "60%"}}>                    
                    <TitleLabel>Início</TitleLabel>
                    <Label>{posto.inicio_atendimento ? posto.inicio_atendimento : "Não disponível"}</Label> 
                </View>            
                <View style={{flexDirection: "column", width: "40%"}}>                    
                    <TitleLabel>Fim</TitleLabel>
                    <Label>{posto.fim_atendimento ? posto.fim_atendimento : "Não houve"}</Label> 
                </View>    
            </View>

            <Separator/>   

            <SubmitButton onPress={() => navigation.navigate('SelectDateTime', { posto, user} )} />
         
            
            </ScrollView>
        </Container>
    );
}

PostoDetails.navigationOptions = ({navigation}) =>  ({
    title: 'Detalhes'
});
