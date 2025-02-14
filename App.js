import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet , YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppViewContainer';

export default function App() {
  YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
  return (
   
    <Provider store={store}>
      <PersistGate
        // loading={
        //   <View style={styles.container}>
        //     <ActivityIndicator color={colors.red} />
        //   </View>
        // }
        persistor={persistor}
      >
        <AppView />
      </PersistGate>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
  },
});
