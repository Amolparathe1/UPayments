import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import { AuthenticationNavigator } from './src/Authentication';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {configureStore} from './src/reduxStore/configureStore';
import {RootRouter} from './rout';
export default function App() {
  //redux store
  const {store, persistor} = configureStore();

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <RootRouter />
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </StoreProvider>
  );
}
