import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 9,
  },
  title: {
    fontSize: 16,
    textDecorationLine: 'none', // Линия подчеркивания по умолчанию
  },
  completed: {
    textDecorationLine: 'line-through', // Перечеркивание текста
  },
});

export default styles;
