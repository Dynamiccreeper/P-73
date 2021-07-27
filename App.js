import React from 'react';
import {createAppContainer} from 'react-navigation';
import {StyleSheet,Text,View,Image} from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import LoginScreen from './screens/LoginScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default function App() {
  return (
    <View>
            <AppContainer/> 
      

    </View>
  );
  
}
const TabNavigator=createBottomTabNavigator({
  Read: {screen:ReadStoryScreen},
  Write: {screen: WriteStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='Read'){
        return(
          <Image source={require('./assets/read.png')}
          style={{width: 40, height: 40}}/>
        )
      }
      else if(routeName==='Write'){
        return(
          <Image source={require('./assets/write.png')}
          style={{width:40, height: 40}}/>
        )
      }
    }
  })
})
const SwitchNavigator = createSwitchNavigator({

  LoginScreen:{screen:LoginScreen},
  TabNavigator:{screen:TabNavigator}


})
const AppContainer=createAppContainer(SwitchNavigator)


