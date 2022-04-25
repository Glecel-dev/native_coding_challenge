import PostDetails from "../post-details/PostDetailsScreen"
import PostScreen from "../post/PostScreen"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export const SignedInStack = () =>{
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ROOT">
            <Stack.Screen name="PostScreen" component={PostScreen} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}