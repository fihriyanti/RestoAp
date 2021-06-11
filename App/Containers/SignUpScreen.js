import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable';

// Styles
import styles from './Styles/SignUpScreenStyles'
import { ScrollView } from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image
              // animation='bounceIn'
              source={Images.logoApp} style={styles.logo} />
          </View>
          <Animatable.View
            animation='fadeInUpBig'
            style={styles.footer}>
            <ScrollView>
              <Text style={styles.header}>SIGN UP</Text>
              <View style={styles.form}>
                <Text style={styles.label}>Phone Number</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='FontAwesome' name='mobile-phone' />
                  <Input placeholder='Your Phone Number' style={styles.input} />
                </Item>
                <Text style={styles.label}>Username</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='FontAwesome' name='user-o' />
                  <Input placeholder='Your Username' style={styles.input} />
                </Item>
                <Text style={styles.label}>Password</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='SimpleLineIcons' name='lock' />
                  <Input placeholder='Your Password' style={styles.input} />
                  <Icon type='Ionicons' name='eye-off-outline' />
                </Item>
                <Button rounded
                  onPress={() => this.props.navigation.navigate('LoginScreen')}
                  style={styles.btnSign}>
                  <Text style={styles.txtSign}>SIGN UP</Text>
                </Button>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      </View>
    )
  }
}