import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#1565c0',
  },
  logo: {
    height: Metrics.images.profile,
    width: Metrics.images.profile,
    borderRadius: 70
  },
  set: {
    color: 'white',
    fontSize: 32,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  centered: {
    backgroundColor: '#1565c0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  nama: {
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  username: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold'
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  btnSign: {
    marginBottom: 20,
    backgroundColor: '#1565c0',
    alignSelf: 'center',
    paddingHorizontal: 50
  },
  txtSign: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
})