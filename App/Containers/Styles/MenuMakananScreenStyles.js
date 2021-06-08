import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  logo: {
    height: Metrics.images.menu,
    width: Metrics.images.menu,
    resizeMode: 'stretch',
  },
  header: {
    backgroundColor: '#1565c0',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  back: {
    color: 'white',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  txtHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'serif'
  },
  lineCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  card: {
    borderRadius: 10,
  },
  cardItem: {
    backgroundColor: '#e0f2f1'
  },
  namaMenu: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  hargaMenu: {
    marginTop: 5,
  },
  review: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  star: { 
    fontSize: 20, 
    color: '#ffd600' 
  },
})