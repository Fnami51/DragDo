import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import { styles } from './area.styles';
import Item from './Item';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Area() {
  const { items } = useItems();

  const [boxDimensions, setBoxDimensions] = useState({ width: 0, height: 0 });
  const boxRef = useRef(null);

  const handleLayout = (event: { nativeEvent: { layout: { width: number; height: number; }; }; }) => {
    const { width, height } = event.nativeEvent.layout;
    setBoxDimensions({ width, height }); // Сохраняем размеры блока
  };

  return (
    <View style={styles.background}>
      <GestureHandlerRootView style={styles.bounds}>
      <View onLayout={handleLayout} ref={boxRef}>
        {items.map((item: ItemType) => (
          <Item
            key={item.id}
            id={item.id}
            tasks={item.tasks}
            position={item.position}
            isChange={item.isChange}
            bounds={boxDimensions}
          />
        ))}
        </View>
        </GestureHandlerRootView>
    </View>
  );
}

export default Area;
