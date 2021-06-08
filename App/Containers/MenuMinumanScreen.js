import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Body, Card, CardItem, Icon } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/MenuMinumanScreenStyles'
import { TouchableHighlight } from 'react-native-gesture-handler'

export default class MenuMinumanScreen extends Component {
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
            <View style={styles.lineCard}>
              <TouchableHighlight
                underlayColor='#1565c0'
                onPress={() => this.props.navigation.navigate('DetailsMenuScreen')}
              >
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.cafelatte} style={styles.logo} />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.namaMenu}>Coffee Latte</Text>
                      <Text style={styles.hargaMenu}>Rp. 23.000</Text>
                      <View style={styles.review}>
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                        <Icon type='Entypo' name='star' style={styles.star} />
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </TouchableHighlight>
              <Card style={styles.card}>
                <CardItem cardBody>
                  <Image source={Images.icechocolate} style={styles.logo} />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.namaMenu}>Ice Chocolate</Text>
                    <Text style={styles.hargaMenu}>Rp. 26.000</Text>
                    <View style={styles.review}>
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={styles.lineCard}>
              <Card style={styles.card}>
                <CardItem cardBody>
                  <Image source={Images.jusalpukat} style={styles.logo} />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.namaMenu}>Jus Alpukat</Text>
                    <Text style={styles.hargaMenu}>Rp. 17.000</Text>
                    <View style={styles.review}>
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                    </View>
                  </Body>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem cardBody>
                  <Image source={Images.lemontea} style={styles.logo} />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.namaMenu}>Lemon Tea</Text>
                    <Text style={styles.hargaMenu}>Rp. 16.000</Text>
                    <View style={styles.review}>
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                      <Icon type='Entypo' name='star' style={styles.star} />
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </View>
          </View>
        </View>
      </View>
    )
  }
}