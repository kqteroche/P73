import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs' 
import CycleTransactionScreen from './screens/CycleTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {
  render(){
    return(
      <SafeAreaProvider>
      <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  CycleTransactionScreen: CycleTransactionScreen,
  SearchScreen: SearchScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "CycleTransaction"){
        return(
          <Image
          source={require("./assets/cycle.jpg")}
          style={styles.container}
        />
        )
        
      }
      else if(routeName === "ReadComplaint"){
        return(
          <Image
          source={require("./assets/searchingbook.png")}
          style={styles.container}
        />)
        
      }
    }
  })
}
  )

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:40, height:40
  },
});
