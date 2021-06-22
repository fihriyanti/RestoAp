import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  logo: {
    height: Metrics.images.profile,
    width: Metrics.images.profile,
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
    fontFamily: 'serif',
    marginLeft: 10,
  },
  lineCard: {
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
    fontSize: 20,
  },
  hargaMenu: {
    marginTop: 10,
    fontSize: 18,
  },
  jumlah: {
    fontSize: 15,
    alignSelf: 'center',
    marginRight: 8,
    fontWeight:'bold'
  },
  btnJumlah: {
    color: 'grey'
  },
  total: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  txtTotal: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  btnPesan: {
    backgroundColor: '#1565c0',
    marginTop: 10
  },
  txtBtnPesan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})