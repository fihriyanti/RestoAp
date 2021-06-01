import { createAppContainer } from 'react-navigation'
import Makanan from './MenuMakananScreen'
import Minuman from './MenuMinumanScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Makanan: { 
                screen: Makanan,
            },
            Minuman: { screen: Minuman },
        },
        {
            initialRouteName: 'Makanan',
            activeColor: '#1565c0'
        },
        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'Makanan') {
                        iconName = focused
                            ? 'ios-home-sharp'
                            : 'ios-home-outline';
                    } else if (routeName === 'Minuman') {
                        iconName = focused ? 'ios-person-circle' : 'user-o';
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