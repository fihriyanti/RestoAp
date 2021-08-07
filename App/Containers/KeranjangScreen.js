import React, { Component } from 'react'
import { Image, View, Text, ScrollView, FlatList } from 'react-native'
import { Button, Card, CardItem, Icon } from 'native-base'
import { Images } from '../Themes'
import firebase from 'firebase'

// Styles
import styles from './Styles/KeranjangScreenStyles'

export default class KeranjangScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      jumlah: 0,
      cart: [],
      total: 0,
    }
  }

  componentDidMount() {
    this.total();

    // const tampil = firebase.database().ref('Keranjang/01')
    // tampil.on('value', datasnap=>{
    //   console.log(datasnap.val())
    // })
    firebase.database().ref('Keranjang').on('value', (snapshot) => {
      
      const user = firebase.auth().currentUser
      var li = []
      var totalsemua = 0
      snapshot.forEach((child) => {
        li.push({
          key: child.key,
          nama: child.val().nama,
          harga: child.val().harga,
          img: child.val().img,
          banyak: child.val().banyak,
          perjumlah : child.val().perjumlah
        })
        totalsemua += child.val().perjumlah 
      })
      console.log(li)
      console.log(totalsemua)
      console.log(user.uid)
      this.setState({ total: totalsemua })
      this.setState({ cart: li })
    })
    // this.intervalID = setInterval(this.total.bind(this), 5000);
  }

  // componentWillUnmount(){
  //   clearInterval(this.intervalID);
  // }

  total = () => {
    this.setState({ count: this.props.navigation.getParam('banyak') });
    this.setState({ jumlah: this.props.navigation.getParam('banyak') * this.props.navigation.getParam('harga') });
  }

  tambahJumlah = () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ jumlah: this.state.count * this.props.navigation.getParam('harga') });
  }
  kurangJumlah = () => {
    if (this.state.count <= 0) {
      this.state.count = 1
    }
    this.setState({ count: this.state.count - 1 })
    this.setState({ jumlah: this.state.count * this.props.navigation.getParam('harga') });
  }

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
          {/* <ScrollView scrollEnabled={false}> */}
            <View style={styles.body}>
              <View style={styles.lineCard}>
                <FlatList
                  data={this.state.cart}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => (
                    <Card style={styles.card}>
                      <CardItem cardBody>
                        <Image source={{ uri: item.img }} style={styles.logo} />
                        <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                          <Text style={styles.namaMenu}>{item.nama}</Text>
                          <Text style={styles.hargaMenu}>Rp. {item.harga}</Text>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                              <Button style={styles.btnJumlah}
                                onPress={this.kurangJumlah}
                              >
                                <Icon style={styles.PM} type='FontAwesome5' name='minus' />
                              </Button>
                              <Button transparent>
                                <Text style={styles.jumlah}>{item.banyak}</Text>
                              </Button>
                              <Button style={styles.btnJumlah}
                                onPress={this.tambahJumlah}
                              >
                                <Icon style={styles.PM} type='FontAwesome5' name='plus' />
                              </Button>
                            </View>
                          </View>
                        </View>
                      </CardItem>
                    </Card>
                  )}

                />
              </View>
            </View>
          {/* </ScrollView> */}
          <View style={styles.total}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txtTotal}>Total : </Text>
              <Text style={styles.txtTotal}>Rp. {this.state.total}</Text>
            </View>
            <Button full style={styles.btnPesan}>
              <Text style={styles.txtBtnPesan}>PESAN</Text>
            </Button>
          </View>
        </View>
      </View >
    )
  }
}