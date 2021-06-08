import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Body, Card, CardItem, Icon } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/MenuMakananScreenStyles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'

export default class MenuMakananScreen extends Component {
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
          <ScrollView scrollEnabled={false}>
            <View style={styles.body}>
              <View style={styles.lineCard}>
                <TouchableHighlight
                  underlayColor='#1565c0'
                  onPress={() => this.props.navigation.navigate('DetailsMenuScreen')}
                >
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Image source={Images.ayamrica} style={styles.logo} />
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text style={styles.namaMenu}>Ayam Rica</Text>
                        <Text style={styles.hargaMenu}>Rp. 18.000</Text>
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
                </Card>
              </View>
              <View style={styles.lineCard}>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.nasikambing} style={styles.logo} />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.namaMenu}>Nasi Goreng Kambing</Text>
                      <Text style={styles.hargaMenu}>Rp. 25.000</Text>
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
                    <Image source={Images.miejawa} style={styles.logo} />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.namaMenu}>Mie Goreng Jawa</Text>
                      <Text style={styles.hargaMenu}>Rp. 15.000</Text>
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
          </ScrollView>
        </View>
      </View>
    )
  }
}