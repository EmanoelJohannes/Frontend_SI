import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { withNavigationFocus } from 'react-navigation';

import posto_img from '../../assets/images/posto.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MapPostoAgendado({ navigation }) {
 
  const lat = navigation.getParam('lat');
  const lng = navigation.getParam('lng');
  const descricao = navigation.getParam('descricao');

  return (
    <>
      <MapView 
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }} 
        style={styles.map}
      >
        
          <Marker 
            coordinate={{ 
              longitude: lng,
              latitude: lat, 
            }}
          >
            <Image 
              style={styles.avatar} 
              source={posto_img}
            />

            <Callout>
              <View style={styles.callout}>
                <Text style={styles.devName}>{descricao}</Text>
              </View>
            </Callout>
          </Marker>
        
      </MapView>
    
    </>
  );
}


MapPostoAgendado.navigationOptions = ({navigation}) =>  ({
  title: 'Ponto de Vacinação',
  headerTitleStyle: {color: '#2c692b'},
  headerLeft: () => (
    <TouchableOpacity style={{marginLeft: 20}} onPress={() => {navigation.goBack()}}>
      <Icon name="chevron-left" size={30} color="#2c692b" />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#41AB4E',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
})

export default withNavigationFocus(MapPostoAgendado);
