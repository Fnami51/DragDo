import React, { StrictMode } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import ItemsProvider from './src/context/ItemContext';
import Main from './src/main';

export default function App() {
  return (
    <StrictMode>
    <DndProvider backend={TouchBackend}>
      <ItemsProvider>
        <Main />
      </ItemsProvider>
    </DndProvider>
    </StrictMode>
  );
}
