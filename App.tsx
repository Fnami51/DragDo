import React, { StrictMode } from 'react';
import ItemsProvider from './src/context/ItemContext';
import Main from './src/main';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <StrictMode>
      <ItemsProvider>
        <Main />
      </ItemsProvider>
    </StrictMode>
  );
}
