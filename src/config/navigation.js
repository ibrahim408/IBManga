import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Discover from '../components/Discover'
import Anime from '../components/Anime'
import Settings from '../components/Settings'
import MangaDetail from '../components/MangaDetail'

 const TabNavigator = createBottomTabNavigator({
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

 export const AppNavigator = createStackNavigator(
  {
    Discover: {
      screen: TabNavigator,
      navigationOptions: () => ({
        title: `Discover`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Discover',

      }),
    },
    MangaDetail: {
      screen: MangaDetail,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerBackTitle: 'Discover',

      }),      
    },
    Anime:{
      screen: Anime,
      navigationOptions: () => ({
        title: `Anime`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Discover'
      })
    },
    Settings:{
      screen: Settings,
      navigationOptions: () => ({
        title: `Settings`,
        headerStyle: {
          backgroundColor: '#132942'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'left',
        headerBackTitle: 'Settings'
      })
    }
  },
  {
    initialRouteName: "Discover"
  }
);
