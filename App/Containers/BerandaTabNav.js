import { createAppContainer } from 'react-navigation'
import Beranda from '../Containers/BerandaScreen'
import Akun from '../Containers/AkunScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Beranda: { 
                screen: Beranda,
            },
            Akun: { screen: Akun },
        },
        {
            initialRouteName: 'Beranda',
            activeColor: '#00695c'
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Beranda') {
                        iconName = focused
                            ? 'ios-home-sharp'
                            : 'ios-home-outline';
                    } else if (routeName === 'Akun') {
                        iconName = focused ? 'ios-search' : 'ios-search-sharp';
                    }
                    return <Ionicons name={iconName} size={25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            },
        },

    )
)