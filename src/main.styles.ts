import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
      padding: 10,
      flex: 1, // Заменяем "display: flex" и растягиваем контейнер по всей высоте
      flexDirection: 'column', // Направление элементов в колонку
      alignItems: 'center', // Выравнивание элементов по горизонтали
      backgroundColor: '#343434', // Фоновый цвет
      width: '100%', // Заменяем 100vw на 100% ширины
    },
  });
  