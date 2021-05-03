import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import DateInput from '../../components/DateInput';

import api from '../../services/api'

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const posto = navigation.getParam('posto');
  const user = navigation.getParam('user');

  useEffect(() => {
    async function loadAvailable(){
      const response = await api.get(`agendamento/${posto.id_posto}/avaliable`, {
        params: {
          date: date,
        },
      });
      setHours(null);
      setHours(response.data);
    }
    loadAvailable();
  }, [date, posto.id_posto])

  async function handleSelectHour(time) {
    const response = await api.post('/storeAgendamento', {id_posto: posto.id_posto, id_usuario: user.id, data_hora: time });    
    if (response.data.ok) {
      Alert.alert("Sucesso", "Você foi adicionado a um grupo de vacinação, atente-se ao seu horário!")
      navigation.goBack();
    }
    
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList 
          data={hours}
          extraData={date}
          keyExtractor={item => item.time}
          renderItem={({item}) => (
            <Hour onPress={() => handleSelectHour(item.value)} enable={item.available}>
              <Title> {item.time} </Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) =>  ({
  title: 'Selecione o horário',
  // headerLeft: () => (
  //   <TouchableOpacity onPress={() => {navigation.goBack()}}>
  //     <Icon name="chevron-left" size={20} color="#fff" />
  //   </TouchableOpacity>
  // )
});