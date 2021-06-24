import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Item, Input, Icon, Button } from 'native-base'
import firebase from 'firebase'
import { Images } from '../Themes'

import * as Animatable from 'react-native-animatable';

// Styles
import styles from './Styles/LoginScreenStyles'
import { TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    secureTextEntry: true

  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       username: '',
  //       password: '',
  //   }
  // }

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
    // firebase.analytics();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // this.setState({
        //   isLogin:true
        // })
        this.props.navigation.navigate("BerandaTabNav")
      } else {
        // this.setState({
        //   isLogin:false
        // })
        console.log("Invalid User")
      }
    });
  }

  onPressLogin = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).
      then(this.onLoginSuccess)
  }

  onLoginSuccess = () => {
    this.props.navigation.navigate("BerandaTabNav")
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
            <ScrollView>
              <Text style={styles.header}>SIGN IN</Text>
              <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='FontAwesome' name='user-o' />
                  <Input placeholder='Your Username' style={styles.input} onChangeText={username => this.setState({ username })} />
                </Item>
                <Text style={styles.label}>Password</Text>
                <Item inlineLabel style={styles.item1}>
                  <Icon type='SimpleLineIcons' name='lock' />
                  {this.state.secureTextEntry ?
                    <Input secureTextEntry={true} placeholder='Your Password' style={styles.input} onChangeText={password => this.setState({ password })} />
                    :
                    <Input placeholder='Your Password' style={styles.input} onChangeText={password => this.setState({ password })} />
                  }
                  <TouchableOpacity onPress={() => this.secureTextEntry()}>
                    {this.state.secureTextEntry ?
                      <Icon type='Ionicons' name='eye-off-outline' />
                      :
                      <Icon type='Ionicons' name='eye-outline' />
                    }
                  </TouchableOpacity>
                </Item>
                <Button rounded
                  onPress={this.onPressLogin}
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
            </ScrollView>
          </Animatable.View>
        </View>
      </View>
    )
  }
}