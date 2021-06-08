import React, { Component } from 'react'
import { Image, View, Text} from 'react-native'
import { Button, Icon, Thumbnail } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/AkunScreenStyles'

export default class AkunScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <Icon type='Ionicons' name='settings' style={styles.set} />
          </View>
          <View style={styles.centered}>
            <Thumbnail source={Images.profile} style={styles.logo}/>
            <Text style={styles.nama}>Akun Saya</Text>
            <Text style={styles.username}>@Username</Text>
          </View>
          <View style={styles.footer}>
            {/* <View> */}
              <Button rounded
                onPress={() => this.props.navigation.navigate('ReservasiScreen')}
                style={styles.btnSign}>
                <Text style={styles.txtSign}>RESERVASI</Text>
              </Button>
            {/* </View> */}
          </View>
        </View>
      </View>
    )
  }
}