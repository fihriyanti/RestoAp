import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/BerandaScreenStyles'

export default class AkunScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View 
          // animation='fadeInDownBig'
          style={styles.centered}>
            <Image source={Images.logoApp} style={styles.logo} />
          </View>
          <View style={styles.footer}>
            <View>
              <Button rounded
                onPress={() => this.props.navigation.navigate('ReservasiScreen')}
                style={styles.btnSign}>
                <Text style={styles.txtSign}>RESERVASI</Text>
              </Button>
              <Button rounded bordered
                onPress={() => this.props.navigation.navigate('MenuScreen')}
                style={styles.btnSignUp}>
                <Text style={styles.txtSignUp}>ORDER MENU</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}