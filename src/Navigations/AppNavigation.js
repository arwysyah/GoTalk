import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator,createMaterialBottomTabNavigator
 } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FeatherIcon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ChatScreen from '../Screens/Main/ChatScreen';
import MapsScreen from '../Screens/Main/MapsScreen';
import ProfileScreen from '../Screens/Main/ProfileScreen';

// const AppStack = createMaterialBottomTabNavigator(
//   {
//     ChatScreen: {
//         screen: ChatScreen,
//         navigationOptions: {
//           tabBarLabel: 'Chat',
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <FeatherIcon style={[{ color: tintColor }]} size={25} name={'home'} />
//             </View>
//           ),
//         }
//       },
      
//     Maps: {
//         screen: MapsScreen,
//         navigationOptions: {
//           tabBarLabel: 'Maps',
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <IoniconsIcon style={[{ color: tintColor }]} size={25} name={'md-contacts'} />
//             </View>
//           ),
//         }
//       },
  
//       ProfileScreen: {
//         screen: ProfileScreen,
//         navigationOptions: {
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ tintColor }) => (
//             <View>
//               <AntDesign style={[{ color: tintColor }]} size={25} name={'setting'} />
//             </View>
//           ),
//         }
//       },
      
//   },
//   {
//         initialRouteName: 'Chat',
//         activeColor: '#3e2465',
//         inactiveColor: '#95afc0',
//         elevation: 10,
//         barStyle: { backgroundColor: '#ffff', elevation: 10 },
//       }
  
  // )
const AppStack = createMaterialTopTabNavigator ({
    Chat : ChatScreen,
    Maps : MapsScreen,
    Friend : ProfileScreen,
  },
  {
    initialRouteName: 'Chat',
    tabBarOptions: {
      activeTintColor: '#FFB20A',
      inactiveTintColor: '#F9F3EC',
      showIcon:true,
      showLabel:true,
      style: {
          backgroundColor:'#694be2'
      },
      labelStyle: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 17
      },
      indicatorStyle: {
        borderBottomColor: '#FFB20A',
        borderBottomWidth: 4,
      },
    },
  }
)

const HeaderRouter = createSwitchNavigator (
  {
    App: AppStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  },
)

export default createAppContainer(HeaderRouter);
