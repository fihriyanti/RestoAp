import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button, Card, CardItem, Right, Icon, Left, Body, List, ListItem } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ReservasiScreenStyles'

export default class ReservasiScreen extends Component {
    state = {
        jumlah: 1,
    }
    tambahJumlah = () => {
        this.setState({ jumlah: this.state.jumlah + 1 })
    }
    kurangJumlah = () => {
        if (this.state.jumlah <= 0) {
            this.state.jumlah = 1
        }
        this.setState({ jumlah: this.state.jumlah - 1 })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View
                        style={styles.centered}>
                        <Image source={Images.logoApp} style={styles.logo} />
                        <Text style={styles.txtTitle}>RESERVASI</Text>
                    </View>
                    <View style={styles.footer}>
                        <Card style={styles.card}>
                            <List>
                                <ListItem>
                                    <CardItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Date</Text>
                                        </Left>
                                        <Body>
                                            <Text style={styles.txtCard}>: Tgl Reservasi</Text>
                                        </Body>
                                        <Right>
                                            <Icon style={styles.icon} type='Feather' name='calendar' />
                                        </Right>
                                    </CardItem>
                                </ListItem>
                                <ListItem>
                                    <CardItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Time</Text>
                                        </Left>
                                        <Body>
                                            <Text style={styles.txtCard}>: Waktu</Text>
                                        </Body>
                                        <Right>
                                            <Icon style={styles.icon} type='AntDesign' name='clockcircleo' />
                                        </Right>
                                    </CardItem>
                                </ListItem>
                                <ListItem>
                                    <CardItem>
                                        <Left>
                                            <Text style={styles.txtCard}>Customer</Text>
                                        </Left>
                                        <Body>
                                            <Text style={styles.txtCard1}>: {this.state.jumlah}</Text>
                                        </Body>
                                        <Right>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Icon style={styles.icon}
                                                    onPress={this.kurangJumlah}
                                                    type='AntDesign' name='minuscircleo' />
                                                <Text style={styles.txtCard1}></Text>
                                                <Icon style={styles.icon}
                                                    onPress={this.tambahJumlah}
                                                    type='AntDesign' name='pluscircleo' />
                                            </View>
                                        </Right>
                                    </CardItem>
                                </ListItem>
                            </List>
                        </Card>
                    </View>
                    <Button full
                        style={styles.btnSign}>
                        <Text style={styles.txtSign}>RESERVASI</Text>
                    </Button>
                </View>
            </View>
        )
    }
}