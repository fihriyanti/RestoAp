import React, { Component } from 'react'
import { Image, View, Text, Dimensions } from 'react-native'
import { Button } from 'native-base'
import { Images } from '../Themes'

// Styles
import styles from './Styles/TentangRestoScreenStyles'
import { ScrollView } from 'react-native'

const { width } = Dimensions.get("window");
const height = width * 0.6;

const gambars = [
  Images.gbr1,
  Images.gbr2,
  Images.gbr3,
  Images.gbr4
]

export default class TentangRestoScreen extends Component {
  state = {
    active: 0
  }

  change = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active) {
      this.setState({active: slide});
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={{ width, height }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              onScroll={this.change}
              style={{ width, height }}
            >
              {
                gambars.map((gambar, index) => (
                  <Image
                    key={index}
                    source={gambar}
                    style={{ width, height, resizeMode: 'cover' }}
                  />
                ))
              }
            </ScrollView>
            <View style={styles.dotView}>
              {
                gambars.map((i, k) => (
                  <Text
                    key={k}
                    style={k==this.state.active ? styles.Activedot : styles.dot}>⬤</Text>
                ))
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}