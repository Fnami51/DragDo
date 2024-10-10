import React from 'react';
import { View } from 'react-native';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import { styles } from './area.styles';
import Item from './Item';

function Area() {
  const { items } = useItems();

  return (
    <View style={styles.background}>
      <View style={styles.bounds}>
        {items.map((item: ItemType) => (
          <Item
            key={item.id}
            id={item.id}
            tasks={item.tasks}
            position={item.position}
            isChange={item.isChange}
          />
        ))}
      </View>
    </View>
  );
}

export default Area;
