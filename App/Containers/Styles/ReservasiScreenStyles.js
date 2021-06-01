import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1,
    },
    logo: {
        marginTop: Metrics.doubleSection,
        height: Metrics.images.ikon,
        width: Metrics.images.ikon,
        resizeMode: 'contain'
    },
    centered: {
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    txtTitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    btnSign: {
        backgroundColor: '#1565c0',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    txtSign: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        borderRadius: 10
    },
    txtCard: {
        fontWeight: 'bold',
        fontSize: 18
    },
    txtCard1: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 5
    },
    icon: {
        color: '#1565c0',
        fontSize: 25
    },
    modal: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10
    },
    bgModal: {
        backgroundColor: '#9e9e9eaa',
        flex: 1,
        justifyContent: 'center',
    },
})