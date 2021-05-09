// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import Main from './pages/Main';
// import Profile from './pages/Profile';

// const Routes = createAppContainer(
//   createStackNavigator({
//     Main: {
//       screen: Main,
//       navigationOptions: {
//         title: 'Pontos de vacinação'
//       },
//     },
//     Profile: {
//       screen: Profile,
//       navigationOptions: {
//         title: 'Perfil no Github'
//       }
//     },
//   }, {
//     defaultNavigationOptions: {
//       headerTintColor: '#FFF',
//       headerBackTitleVisible: false,
//       headerStyle: {
//         backgroundColor: '#41AB4E',
//       },
//     },
//   })
// );

// export default Routes;



import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Main from './pages/Main';
import PostoDetails from './pages/PostoDetails';
import SelectDateTime from './pages/SelectDateTime';
import CadastrarPosto from './pages/CadastrarPosto';

import ConfigurationMenu from './pages/ConfigurationMenu';
import Profile from './pages/Profile';
import Marcacoes from './pages/Marcacoes';
import MapPostoAgendado from './pages/MapPostoAgendado';
import Sobre from './pages/Sobre';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Sign: createStackNavigator({
        SignIn,
        SignUp    
      },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }),
      App: createBottomTabNavigator({
        Main: {
          screen: createStackNavigator({            
            Main: {
              screen: Main,
              navigationOptions: {
                title: 'Pontos de Vacinação'
              },
            },  
            PostoDetails,
            SelectDateTime,
            CadastrarPosto
          },
            {
              defaultNavigationOptions: {
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#2c692b',
                },
              },
            }),
          navigationOptions: {
            inactiveTintColor: '#333',
            activeTintColor: '#2c692b',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" size={30} color={tintColor} />
            )
          }
        },
        ConfigurationMenu: {
          screen: createStackNavigator({
            ConfigurationMenu,
            Profile,
            Marcacoes,
            MapPostoAgendado,
            Sobre
          }, { defaultNavigationOptions: { headerStatusBarHeight: 8 } }),
          navigationOptions: {
            inactiveTintColor: '#333',
            activeTintColor: '#2c692b',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="more-vert" size={30} color={tintColor} />
            )
          }
        }
      }, {
        resetOnBlur: true,
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          keyboardHidesTabBar: true,
          activeTintColor: '#FFF',
          inactiveTintColor: '#333',
          activeTintColor: '#2c692b',
          style: {
            backgroundColor: '#fff',
            paddingBottom: 2
          }
        },
      }),
    },
  )
);

export default Routes;