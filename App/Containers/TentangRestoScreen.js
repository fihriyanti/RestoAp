import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/TentangRestoScreenStyles'

export default class TentangRestoScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.google.com/maps/uv?pb=!1s0x2dbee5dcbf912c6b%3A0xd6e30000f2077189!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMotEs4rpnVh47aND7NQCuh73IOaD8XVPu7PzFB%3Dw213-h160-k-no!5sd%27original%20resto%20%26%20cafe%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMotEs4rpnVh47aND7NQCuh73IOaD8XVPu7PzFB&hl=en&sa=X&ved=2ahUKEwjr4b3K3orxAhUBSX0KHVZ7CWAQoiowE3oECD0QAw#' }}
            style={{width: '100%', height: '40%', resizeMode: 'contain'}}
          />
          <Image
            source={{ uri: 'https://www.google.com/maps/uv?pb=!1s0x2dbee5dcbf912c6b%3A0xd6e30000f2077189!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMotEs4rpnVh47aND7NQCuh73IOaD8XVPu7PzFB%3Dw213-h160-k-no!5sd%27original%20resto%20%26%20cafe%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPF4BMX_CQY1GKX3JjhCVODEcyr2oFY7Gooi6cT&hl=en&sa=X&ved=2ahUKEwjr4b3K3orxAhUBSX0KHVZ7CWAQoiowE3oECD0QAw#' }}
            style={{width: '100%', height: '40%', resizeMode: 'contain'}}
          />
        </View>
      </View>
    )
  }
}