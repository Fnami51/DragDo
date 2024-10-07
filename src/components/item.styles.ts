import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    width: 160,
  },
  buttonBox: {
    flexDirection: 'row', // Используем row для выравнивания по горизонтали
    justifyContent: 'flex-end', // Выровнять элементы по правому краю
    gap: 5, // Поскольку gap не поддерживается, можно использовать margin
  },
  button: {
    width: 20,
    height: 20,
    padding: 2,
    borderRadius: 6,
  },
  btnDelete: {
    backgroundColor: '#f4a5a0',
  },
  btnChange: {
    backgroundColor: '#a0a5f4',
  },
  btnNoActive: {
    // Здесь добавьте стиль для btn_no_active, если он нужен
  },
  topic: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  list: {
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column', // Направление элементов в колонку
    gap: 5, // Поскольку gap не поддерживается, используйте margin для отдельных элементов
  },
});

export default styles;
