import React, { Component } from 'react'
import { Image, View, Text, Modal, TouchableOpacity } from 'react-native'
import { Button, Card, CardItem, Right, Icon, Left, Body, List, ListItem, Textarea, Form } from 'native-base'
import { Images } from '../Themes'
import { Calendar } from 'react-native-calendars'
import TimePicker from "react-native-24h-timepicker";

// Styles
import styles from './Styles/ReservasiScreenStyles'
import { ScrollView } from 'react-native'

export default class ReservasiScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1: false,
            show3: false,
            jumlah: 1,
            showDatePicker: true,

            hari: "",
            bulan: "",
            tahun: "",

            time: "",

            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    showDatePicker = () => {
        setDatePickerVisibility(false)
    }

    hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
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

    onCancel() {
        this.TimePicker.close();
    }

    onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#1565c0' }}>
                        <Icon type='Ionicons' name='ios-arrow-back'
                            style={styles.set}
                            onPress={() => this.props.navigation.navigate('Beranda')}
                        />
                    </View>
                    <View
                        style={styles.centered}>
                        <Image source={Images.logoApp} style={styles.logo} />
                        <Text style={styles.txtTitle}>RESERVASI</Text>
                    </View>
                    <View style={styles.footer}>
                        <ScrollView>
                            <Card style={styles.card}>
                                <List>
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>Date</Text>
                                            </Left>
                                            <Body>
                                                <Text style={styles.txtCard}>: {this.state.hari}-{this.state.bulan}-{this.state.tahun}</Text>
                                            </Body>
                                            <Right>
                                                <Icon
                                                    onPress={() => this.setState({ show: true })}
                                                    style={styles.icon} type='Feather' name='calendar' />
                                            </Right>
                                        </CardItem>
                                    </ListItem>
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>Time</Text>
                                            </Left>
                                            <Body>
                                                <Text style={styles.txtCard}>: {this.state.time}</Text>
                                            </Body>
                                            <Right>
                                                <Icon
                                                    onPress={() => this.TimePicker.open()}
                                                    style={styles.icon} type='AntDesign' name='clockcircleo' />
                                                <TimePicker
                                                    ref={ref => {
                                                        this.TimePicker = ref;
                                                    }}
                                                    maxHour={16}
                                                    // hourUnit="0"
                                                    selectedHour="8"
                                                    onCancel={() => this.onCancel()}
                                                    onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                                                />
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
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>No Meja</Text>
                                            </Left>
                                            <Body>
                                                <Text style={styles.txtCard1}>: 2</Text>
                                            </Body>
                                            <Right>
                                                <Text
                                                    onPress={() => this.setState({ show3: true })}
                                                    style={styles.txtBtnPilih}
                                                >
                                                    Lihat Meja
                                                </Text>
                                            </Right>
                                        </CardItem>
                                    </ListItem>
                                </List>
                            </Card>
                        </ScrollView>
                    </View>
                    <Button full
                        style={styles.btnSign}>
                        <Text style={styles.txtSign}>RESERVASI</Text>
                    </Button>
                </View>
                <Modal transparent={true} visible={this.state.show}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <Calendar
                                todayBackgroundColor="#e6ffe6"
                                selectedDayColor="#66ff33"
                                onDayPress={(startDate) => {
                                    this.setState({ show: false })
                                    {
                                        console.log(startDate.month + startDate.day, startDate)
                                        this.setState({ hari: startDate.day });
                                        this.setState({ bulan: startDate.month });
                                        this.setState({ tahun: startDate.year });
                                    }
                                }}
                                theme={
                                    {
                                        todayTextColor: '#ffffff',
                                        todayBackgroundColor: '#1565c0',
                                    }
                                }
                            />
                        </View>
                    </View>
                </Modal>
                <Modal transparent={true} visible={this.state.show3}>
                    <View style={styles.bgModal}>
                        <View style={styles.modal}>
                            <Text>Pilih Meja</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}