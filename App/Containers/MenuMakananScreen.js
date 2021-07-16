import React, { Component } from 'react'
import { Image, View, Text, ScrollView, FlatList } from 'react-native'
import { Body, Card, CardItem, Icon, Item, Input, Button, Left, Right } from 'native-base'
import { Images } from '../Themes'
import { TouchableHighlight } from 'react-native-gesture-handler'
import firebase from 'firebase';
// import {firebaseConfig} from './../../firebaseconfig'


// Styles
// import styles from './Styles/MenuMakananScreenStyles'

import * as Animatable from 'react-native-animatable'
// import Recaptcha from 'react-native-recaptcha-that-works'

// Styles
import styles from './Styles/MenuMakananScreenStyles'
// import { ScrollView } from 'react-native';


// firebase.analytics();


export default class MenuMakananScreen extends Component {


  constructor() {
    super();
    this.state = {
      displayName: '',
      harga: '',
      img: '',
      list: []
      //Phone Auth
      // showModal: false,
      // codeIsSent: false,
      // confirmation: {},
      // errorMessage: ''
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCD0uUL812u98r3LSsLfx60_BiJEEhnHM4",
      authDomain: "d-fasto.firebaseapp.com",
      databaseURL: "https://d-fasto-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "d-fasto",
      storageBucket: "d-fasto.appspot.com",
      messagingSenderId: "888195449280",
      appId: "1:888195449280:web:b838a6deaac9fd26c8c825",
      measurementId: "G-JGQ4DRP757"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    } else {
      firebase.app()
    }
    // firebase.database().ref('Menu/Makanan').on('value', datasnap => {
    //   const gambar = datasnap.val();
    //   this.setState({ gambar });
    //   console.log(gambar);

    // });
    firebase.database().ref('Menu/Makanan').on('value', (snapshot) => {
      var li = []
      snapshot.forEach((child) => {
        li.push({
          key: child.key,
          nama: child.val().Nama,
          harga: child.val().Harga,
          img: child.val().Img
        })
      })
      this.setState({ list: li })
    })
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  }

  readData() {

    // var firebaseConfig = {
    //   apiKey: "AIzaSyCD0uUL812u98r3LSsLfx60_BiJEEhnHM4",
    //   authDomain: "d-fasto.firebaseapp.com",
    //   databaseURL: "https://d-fasto-default-rtdb.asia-southeast1.firebasedatabase.app",
    //   projectId: "d-fasto",
    //   storageBucket: "d-fasto.appspot.com",
    //   messagingSenderId: "888195449280",
    //   appId: "1:888195449280:web:b838a6deaac9fd26c8c825",
    //   measurementId: "G-JGQ4DRP757"
    // };

    // // Initialize Firebase
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();    
    // }
    // else {
    //   firebase.app();
    // }
    // firebase.region('asia-southeast1').https.onRequest(app)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Icon style={styles.back} type='AntDesign' name='arrowleft'
                onPress={() => this.props.navigation.navigate('BerandaTabNav')}
              />
              <Text style={styles.txtHeader}>D'Fas To</Text>
              <Icon style={styles.back} type='FontAwesome5' name='shopping-cart'
                onPress={() => this.props.navigation.navigate('KeranjangScreen')}
              />
            </View>
          </View>
          <View style={styles.body}>
            <FlatList
              data={this.state.list}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableHighlight
                  onPress={() => {
                    console.log(item.key, item.nama, item.harga, item.img)
                    // this.btnAlert(item.key, item.nama, item.harga, item.img);
                    this.props.navigation.navigate('DetailsMenuScreen', {
                      paramkey : item.key, 
                      paramnama : item.nama, 
                      paramharga : item.harga,
                      paramimg : item.img
                    })
                  }
                  }
                >
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Image source={{ uri: item.img }} style={styles.logo} />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <View>
                          <Text style={styles.namaMenu}>{item.nama}</Text>
                          <Text style={styles.hargaMenu}>{item.harga}</Text>
                        </View>
                      </Left>
                      <Right>
                        <View style={styles.review}>
                          <Icon type='Entypo' name='star' style={styles.star} />
                          <Icon type='Entypo' name='star' style={styles.star} />
                          <Icon type='Entypo' name='star' style={styles.star} />
                          <Icon type='Entypo' name='star' style={styles.star} />
                        </View>
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableHighlight>
              )}
            />

            {/* <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.capcay} style={styles.logo} />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.namaMenu}>Capcay</Text>
                      <Text style={styles.hargaMenu}>Rp. 15.000</Text>
                      <View style={styles.review}>
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                      </View>
                    </Body>
                  </CardItem>
                </Card> */}
            {/* </View> */}
          </View>
          {/* </ScrollView> */}
        </View>
      </View>
    )
  }
}