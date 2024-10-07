import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4b4b4b', // Цвет фона
    marginTop: 36, // Отступ сверху
    borderRadius: 20, // Радиус границ
    width: '92%', // Ширина в процентах от экрана
    height: '70%', // Заменяем 70vh на 70% высоты экрана
    position: 'relative', // Позиционирование
    alignSelf: 'center', // Центрируем по горизонтали
  },
  bounds: {
    width: '100%', // Ширина контейнера
    height: '100%', // Высота контейнера
    position: 'relative', // Позиционирование
  },
});
