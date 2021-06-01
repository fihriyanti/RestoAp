import { createAppContainer } from 'react-navigation'
import Beranda from '../Containers/BerandaScreen'
import Akun from '../Containers/AkunScreen'
import Tentang from '../Containers/TentangRestoScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontAwesome5 from 'react-native-vector-icons'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Beranda: { 
                screen: Beranda,
            },
            Akun: { screen: Akun },
            Tentang: { screen: Tentang },
        },
        {
            initialRouteName: 'Beranda',
            activeColor: '#1565c0'
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Beranda') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (routeName === 'Akun') {
                        iconName = focused ? 'ios-person-circle' : 'user-o';
                    } else if (routeName === 'Tentang') {
                        iconName = focused ? 'ios-person-circle' : 'user-o';
                    }
                    return <FontAwesome5 name={iconName} size={25} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            },
            showIcon: true,
        },

    )
)