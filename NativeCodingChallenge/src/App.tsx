/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { SignedInStack } from './libraries/core/components/navigation/NavigationScreen';
import accesTokenInterceptor from './libraries/core/interceptors/acces-token.interceptor';
import errorInterceptor from './libraries/core/interceptors/error.interceptor';
import apiService from './libraries/core/services/api.service';
//Atach Interceptor

apiService.attachInterceptor(accesTokenInterceptor);
apiService.attachInterceptor(errorInterceptor);

const App = () => {

  return (
      <SignedInStack/>
  );
};

const styles = StyleSheet.create({

});

export default App;
