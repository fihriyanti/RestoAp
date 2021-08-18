import React, { Component } from 'react'
import { Image, View, Text, Modal } from 'react-native'
import { Button, Card, CardItem, Right, Icon, Left, Body, List, ListItem, Textarea, Input } from 'native-base'
import { Images } from '../Themes'
import { Calendar } from 'react-native-calendars'
import TimePicker from "react-native-24h-timepicker"
import SelectDropdown from 'react-native-select-dropdown'

// Styles
import styles from './Styles/ReservasiScreenStyles'
import { ScrollView } from 'react-native'

const reservasi = ['Makan Siang', 'Ulang Tahun', 'Pertemuan', 'Acara Keluarga', 'Rapat']

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
        if (hour < 8) {
            alert("Jam Buka hanya antara 08 - 16 WITA")
        } else {
            if (hour <= 9) {
                hour = "0" + hour;
            }
            this.setState({ time: `${hour}:${minute}` });
        }
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
                                        <SelectDropdown
                                            data={reservasi}
                                            onSelect={(selectedItem, index) => {
                                                console.log(selectedItem, index)
                                            }}
                                            buttonTextAfterSelection={(selectedItem, index) => {
                                                // text represented after item is selected
                                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                                return selectedItem
                                            }}
                                            rowTextForSelection={(item, index) => {
                                                // text represented for each item in dropdown
                                                // if data array is an array of objects then return item.property to represent item in dropdown
                                                return item
                                            }}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>Nama</Text>
                                            </Left>
                                            <Body>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                    <Text style={styles.txtCard2}>: </Text>
                                                    <Input style={{ borderColor: 'grey' }} placeholder='Nama Pelanggan' />
                                                </View>
                                            </Body>
                                            <Right />
                                        </CardItem>
                                    </ListItem>
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>Tanggal</Text>
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
                                                <Text style={styles.txtCard}>Waktu</Text>
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
                                                <Text style={styles.txtCard}>Pelanggan</Text>
                                            </Left>
                                            <Body>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                    <Text style={styles.txtCard2}>: </Text>
                                                    <Input style={{ borderColor: 'grey' }} placeholder='Jumlah Pelanggan' />
                                                </View>
                                            </Body>
                                            <Right />
                                        </CardItem>
                                    </ListItem>

                                    {/* <ListItem>
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
                                    </ListItem> */}
                                    <ListItem>
                                        <CardItem>
                                            <Left>
                                                <Text style={styles.txtCard}>Keterangan </Text>
                                            </Left>
                                            <Body>
                                                <Text style={styles.txtCard2}>: </Text>
                                            </Body>
                                            <Right />
                                        </CardItem>
                                    </ListItem>
                                    <ListItem>
                                        <CardItem>
                                            <Textarea h={20} placeholder='Arisan, Kumpul Keluarga, Ulang Tahun, dll' />
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
                            <Button
                                onPress={() => this.setState({ show3: false })}
                            >
                                <Text>OK</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}