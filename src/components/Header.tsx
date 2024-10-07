import { View, Text, TouchableOpacity } from 'react-native';
import { useItems } from '../hooks/useItems';
import Svg, { Path } from 'react-native-svg';
import { styles } from './header.styles';

function Header() {
  const { items, setItem } = useItems();

  function addNewTask() {
    const newTask = {
      id: items.length ? Math.max(...items.map(item => item.id)) + 1 : 1,
      tasks: [],
      position: { x: 0, y: 0 },
      isChange: true
    };

    setItem([...items, newTask]);
  }

  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.button} onPress={addNewTask}>
        <Svg width="30" height="30" viewBox="0 0 64 64">
          <Path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z M 32 22 C 30.895 22 30 22.896 30 24 L 30 30 L 24 30 C 22.896 30 22 30.895 22 32 C 22 33.105 22.896 34 24 34 L 30 34 L 30 40 C 30 41.104 30.895 42 32 42 C 33.105 42 34 41.104 34 40 L 34 34 L 40 34 C 41.104 34 42 33.105 42 32 C 42 30.895 41.104 30 40 30 L 34 30 L 34 24 C 34 22.896 33.105 22 32 22 z"></Path>
        </Svg>
        <Text style={styles.button_text}>Add new</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
