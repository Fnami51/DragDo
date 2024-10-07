import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
      borderRadius: 10,
      height: 40, // Увеличил высоту, так как в React Native единицы измерения идут в пикселях
      paddingVertical: 3,
      paddingHorizontal: 10,
      marginTop: 7,
      borderWidth: 1, // Для поля ввода нужно задать рамку
      borderColor: 'gray',
    },
  });
  
export default styles;