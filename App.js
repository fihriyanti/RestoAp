import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from './App/Containers/LaunchScreen'
import LoginScreen from './App/Containers/LoginScreen'
import SignUpScreen from './App/Containers/SignUpScreen'
// import BerandaTabNav from './App/Containers/BerandaTabNav'
import BerandaScreen from './App/Containers/BerandaScreen'
import MenuScreen from './App/Containers/MenuScreen'
import DetailsMenuScreen from './App/Containers/DetailsMenuScreen'
import ReservasiScreen from './App/Containers/ReservasiScreen'

import styles from './App/NavigationStyles'

const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  // BerandaTabNav: { screen: BerandaTabNav },
  BerandaScreen: { screen: BerandaScreen },
  MenuScreen: { screen : MenuScreen },
  DetailsMenuScreen: { screen: DetailsMenuScreen },
  ReservasiScreen: { screen: ReservasiScreen }
}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)