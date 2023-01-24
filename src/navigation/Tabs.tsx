import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from './Tab1';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {marginBottom: Platform.OS === 'ios' ? 0 : 10},
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 0 : 60,
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeScreen"
        component={Tab1Screen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color}) => {
            return <Icon name="list-outline" color={color} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => {
            return <Icon name="search-outline" color={color} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
