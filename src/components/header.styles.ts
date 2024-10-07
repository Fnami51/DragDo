import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1, // Контейнер занимает всю высоту экрана
    justifyContent: 'flex-end', // Аналог justify-content: end
    paddingTop: 54, // Отступ сверху
    width: '92%', // Ширина в процентах
    alignSelf: 'center', // Центрируем контейнер по горизонтали, аналогично ширине в процентах
  },
  button: {
    flexDirection: 'row', // Аналог display: flex с направлением по горизонтали
    alignItems: 'center', // Выравнивание элементов по вертикали
    gap: 8, // В React Native напрямую нет свойства gap, его заменим отступом через marginRight в child
    height: 40,
    width: 114,
    padding: 7,
    borderRadius: 10,
    backgroundColor: 'white', // Фоновый цвет кнопки
  },
  button_text: {
    fontWeight: '600', // Аналог font-weight: 600
  },
});
