import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Button } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/BerandaScreenStyles'

export default class BerandaScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView>
            <View
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
                  onPress={() => this.props.navigation.navigate('MenuTabNav')}
                  style={styles.btnSignUp}>
                  <Text style={styles.txtSignUp}>ORDER MENU</Text>
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}