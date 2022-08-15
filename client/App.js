import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './assets/pages/Home';
import { About } from './assets/pages/About';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='MuterKaset'>
        <Tab.Screen name='MuterKaset' component={Home} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name='play-circle-sharp'
                size={30}
                color={tabInfo.color}
              />
            )
          }
        }}/>
        <Tab.Screen name='About' component={About} options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name='information-circle-sharp'
                size={30}
                color={tabInfo.color}
              />
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
