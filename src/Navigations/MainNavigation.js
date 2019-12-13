import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Loading from '../Screens/Loading';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import AppScreen from '../Screens/AppScreen';
import SetProfileScreen from '../Screens/Main/SetProfileScreen';
import SetChatScreen from '../Screens/Main/SetChatScreen';
import SetFriendScreen from '../Screens/Main/SetFriendScreen';

const AppStack = createStackNavigator ({
    App : AppScreen,
    SetProfile : SetProfileScreen,
    SetChat: SetChatScreen,
    SetFriend: SetFriendScreen
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  }
)

const AuthStack = createStackNavigator ({
    Login : LoginScreen,
    Register : RegisterScreen
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

const Router = createSwitchNavigator (
  {
    Loading: Loading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  }
)

export default createAppContainer(Router);
