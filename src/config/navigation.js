import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Discover from '../components/Discover'
import Anime from '../components/Anime'
import Settings from '../components/Settings'

export const TabNavigator = createBottomTabNavigator({
   Discover: {
      screen: Discover,
   },
   Anime: {
     screen: Anime,
   },
   Settings: {
    screen: Settings,
   }
 }, { 

   // This will get the tabs to show their labels/icons at the bottom.
   tabBarPosition: 'bottom',

  animationEnabled: true,
  tabBarOptions: {
    style: {
                backgroundColor: '#132942',
                opacity: 1,
                height: 55,
                borderTopColor: 'transparent',
                borderTopWidth: 1,
                paddingRight: 10,
                paddingLeft: 10,
                borderTopWidth: 1,
                borderTopColor: 'grayPlaceHolder'
    },
    activeTintColor: 'white',
  }
});
