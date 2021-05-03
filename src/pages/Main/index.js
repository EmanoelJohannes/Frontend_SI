import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigationFocus } from 'react-navigation';

import posto_img from '../../assets/images/posto.png';

import api from '../../services/api';

function Main({ navigation, isFocused }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [postos, setPostos] = useState([]);

  const user = navigation.getParam('user');
  const flag = false;

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }

      if (user.agente == true) {
        flag = true;
      } else {
        flag = false;
      }
    }

    loadInitialPosition();
  }, []);


  useEffect(() => {
    async function loadPostos() {
      const { latitude, longitude } = currentRegion;
  
      const response = await api.get(`/getPostos/${latitude}/${longitude}`);
      
      setPostos(response.data);
    }

    loadPostos();
  }, [currentRegion]);


  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>

      {flag == true ? 
      
      <>
        <MapView 
          onPress={(e) => { navigation.navigate("CadastrarPosto", {lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude, user: user})}}
          onRegionChangeComplete={handleRegionChanged} 
          initialRegion={currentRegion} 
          style={styles.map}
        >
          {postos.map(posto => (
            <Marker 
              key={posto.id_posto}
              coordinate={{ 
                longitude: posto.lng,
                latitude: posto.lat, 
              }}
            >
              <Image 
                style={styles.avatar} 
                source={posto_img}
              />

              <Callout onPress={() => {
                navigation.navigate('PostoDetails', { posto, user });
              }}>
                <View style={styles.callout}>
                  <Text style={styles.devName}>{posto.descricao}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar por cidade..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            // value={techs}
            // onChangeText={setTechs}
          />

          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
            <MaterialIcons name="my-location" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </> 
      
      : 
      
      <>
        <MapView 
          onRegionChangeComplete={handleRegionChanged} 
          initialRegion={currentRegion} 
          style={styles.map}
        >
          {postos.map(posto => (
            <Marker 
              key={posto.id_posto}
              coordinate={{ 
                longitude: posto.lng,
                latitude: posto.lat, 
              }}
            >
              <Image 
                style={styles.avatar} 
                source={posto_img}
              />

              <Callout onPress={() => {
                navigation.navigate('PostoDetails', { posto, user });
              }}>
                <View style={styles.callout}>
                  <Text style={styles.devName}>{posto.descricao}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
        <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar por cidade..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            // value={techs}
            // onChangeText={setTechs}
          />

          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
            <MaterialIcons name="my-location" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </>
    }

      
    </>
  );
}

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

export default withNavigationFocus(Main);
