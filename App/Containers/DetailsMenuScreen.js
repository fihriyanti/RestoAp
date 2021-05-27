import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Body, Button, Icon, Left, Right } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/DetailsMenuScreenStyles'

export default class DetailsMenuScreen extends Component {
    state = {
        count: 1,
    }
    tambahJumlah = () => {
        this.setState({ count: this.state.count + 1 })
    }
    kurangJumlah = () => {
        if (this.state.count <= 0){
            this.state.count=1
        }
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Left>
                            <Icon style={styles.back} type='AntDesign' name='arrowleft'
                                onPress={() => this.props.navigation.navigate('MenuScreen')}
                            />
                        </Left>
                        <Body>
                            <Text style={styles.txtHeader}>Menu's Detail</Text>
                        </Body>
                        <Right />
                    </View>
                    <View>
                        <Image source={Images.ayamrica} style={styles.logo} />
                        <Button full style={styles.btn}>
                            <Text style={styles.txtBtn}>TERSEDIA</Text>
                        </Button>
                        <View style={styles.body}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View>
                                    <Text style={styles.namaMenu}>Ayam Rica</Text>
                                    <Text style={styles.hargaMenu}>Rp. 18.000</Text>
                                    <View style={styles.review}>
                                        <Icon type='Entypo' name='star' style={styles.star} />
                                        <Icon type='Entypo' name='star' style={styles.star} />
                                        <Icon type='Entypo' name='star' style={styles.star} />
                                        <Icon type='Entypo' name='star' style={styles.star} />
                                    </View>
                                </View>
                                <View style={styles.tambah}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Button bordered style={styles.btnPM}
                                            onPress={this.kurangJumlah}
                                        >
                                            <Icon style={styles.PM} type='FontAwesome5' name='minus' />
                                        </Button>
                                        <Button transparent>
                                            <Text style={styles.jml}>{this.state.count}</Text>
                                        </Button>
                                        <Button bordered style={styles.btnPM}
                                            onPress={this.tambahJumlah}
                                        >
                                            <Icon style={styles.PM} type='FontAwesome5' name='plus' />
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Button full style={styles.btnCart}>
                    <Icon style={styles.back} type='FontAwesome5' name='cart-plus' />
                </Button>
            </View>
        )
    }
}