import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LaunchScreen from './App/Containers/LaunchScreen'
import LoginScreen from './App/Containers/LoginScreen'
import SignUpScreen from './App/Containers/SignUpScreen'
import BerandaTabNav from './App/Containers/BerandaTabNav'
import DetailsMenuScreen from './App/Containers/DetailsMenuScreen'
import ReservasiScreen from './App/Containers/ReservasiScreen'
import MenuTabNav from './App/Containers/MenuTabNav'
import EditAkunScreen from './App/Containers/EditAkunScreen'

import styles from './App/NavigationStyles'

const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  BerandaTabNav: { screen: BerandaTabNav },
  DetailsMenuScreen: { screen: DetailsMenuScreen },
  ReservasiScreen: { screen: ReservasiScreen },
  MenuTabNav: { screen : MenuTabNav },
  EditAkunScreen: { screen : EditAkunScreen },
}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
        headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)