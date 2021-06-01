import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.centered}>
            <Image
              // animation='bounceIn'
              source={Images.logoApp} style={styles.logo} />
          </View>
          <View
            // animation='fadeInUpBig'
            style={styles.footer}>
            <Text style={styles.header}>SIGN IN</Text>
            <View style={styles.form}>
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
                onPress={() => this.props.navigation.navigate('BerandaTabNav')}
                style={styles.btnSign}>
                <Text style={styles.txtSign}>SIGN IN</Text>
              </Button>
              <Text style={styles.txtAc}>Don't have a account?</Text>
              <Button rounded bordered
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
                style={styles.btnSignUp}>
                <Text style={styles.txtSignUp}>SIGN UP</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}