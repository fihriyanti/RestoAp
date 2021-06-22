import React, { Component } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { Button, Card, CardItem, Icon } from 'native-base'
import { Images } from '../Themes'
import { TouchableHighlight } from 'react-native-gesture-handler'

// Styles
import styles from './Styles/KeranjangScreenStyles'

export default class KeranjangScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Icon style={styles.back} type='AntDesign' name='arrowleft'
                onPress={() => this.props.navigation.navigate('MenuTabNav')}
              />
              <Text style={styles.txtHeader}>Keranjang Saya</Text>
            </View>
          </View>
          <ScrollView scrollEnabled={false}>
            <View style={styles.body}>
              <View style={styles.lineCard}>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.ayamrica} style={styles.logo} />
                    <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                      <Text style={styles.namaMenu}>Ayam Rica</Text>
                      <Text style={styles.hargaMenu}>Rp. 25.000</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <Icon style={styles.btnJumlah} type='FontAwesome' name='minus-square' />
                        <Text style={styles.jumlah}>2</Text>
                        <Icon style={styles.btnJumlah} type='FontAwesome' name='plus-square' />
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </View>
              <View style={styles.lineCard}>
                <Card style={styles.card}>
                  <CardItem cardBody>
                    <Image source={Images.nasikambing} style={styles.logo} />
                    <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                      <Text style={styles.namaMenu}>Ayam Rica</Text>
                      <Text style={styles.hargaMenu}>Rp. 18.000</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <Icon style={styles.btnJumlah} type='FontAwesome' name='minus-square' />
                        <Text style={styles.jumlah}>2</Text>
                        <Icon style={styles.btnJumlah} type='FontAwesome' name='plus-square' />
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </View>
            </View>
          </ScrollView>
          <View style={styles.total}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtTotal}>Total : </Text>
              <Text style={styles.txtTotal}>Rp.</Text>
            </View>
            <Button full style={styles.btnPesan}>
              <Text style={styles.txtBtnPesan}>PESAN</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}