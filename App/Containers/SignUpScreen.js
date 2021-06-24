import React, { Component } from 'react'
import { Image, View, Text, Alert } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import { Images } from '../Themes'
// import firebase from '@react-native-firebase/auth'
import firebase from 'firebase'

import * as Animatable from 'react-native-animatable';

// Styles
import styles from './Styles/SignUpScreenStyles'
import { ScrollView } from 'react-native';

export default class SignUpScreen extends Component {

  // state={
  //   isLogin:null
  // }
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyCD0uUL812u98r3LSsLfx60_BiJEEhnHM4",
      authDomain: "d-fasto.firebaseapp.com",
      projectId: "d-fasto",
      storageBucket: "d-fasto.appspot.com",
      messagingSenderId: "888195449280",
      appId: "1:888195449280:web:b838a6deaac9fd26c8c825"
      // measurementId: "G-JGQ4DRP757"  
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    else {
      firebase.app();
    }
  }

  registerUser = () => {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            displayName: this.state.displayName
          })
          console.log('User registered successfully!')
          this.props.navigation.navigate('LoginScreen')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

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
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.header}>SIGN UP</Text>
              <View style={styles.form}>
                <Text style={styles.label}>Phone Number</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='Fontisto' name='phone' />
                  <Input placeholder='Your Phone Number' style={styles.input} onChangeText={email => this.setState({ email })} />
                </Item>
                <Text style={styles.label}>Email</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='Zocial' name='email' />
                  <Input placeholder='Your Email' style={styles.input} onChangeText={email => this.setState({ email })} />
                </Item>
                <Text style={styles.label}>Username</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='FontAwesome' name='user-o' />
                  <Input placeholder='Your Username' style={styles.input} onChangeText={displayName => this.setState({ displayName })} />
                </Item>
                <Text style={styles.label}>Password</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='SimpleLineIcons' name='lock' />
                  <Input placeholder='Your Password' style={styles.input} onChangeText={password => this.setState({ password })} />
                  <Icon type='Ionicons' name='eye-off-outline' />
                </Item>
                <Button rounded
                  onPress={this.registerUser}
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