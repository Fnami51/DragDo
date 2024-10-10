import React from 'react';
import { render } from '@testing-library/react-native';
import { fireEvent, act } from '@testing-library/react-native';
import Item from './Item';

jest.mock('../hooks/useItems', () => ({
  useItems: () => ({
    setItem: jest.fn(),
  }),
}));

describe('Компонент Item', () => {
  const setItemMock = jest.fn(); 

  const mockItem = {
    id: 1,
    tasks: [
      { task_id: 1, title: 'first', isComplete: false },
      { task_id: 2, title: 'second', isComplete: true },
    ],
    position: { x: 10, y: 10 }, // Начало
    isChange: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  let component: any;

  beforeEach(() => {
    component = render(<Item {...mockItem} />); 
  });

  test('Перемещение Item и возвращение обратно', () => {
    const animatedView = component.getByTestId('animated-item');

    const startPosition = { ...mockItem.position };
    console.info('Начальная позиция:', startPosition);

    act(() => {
      console.info('Начало первого перетаскивания');
      fireEvent(animatedView, 'panResponderGrant'); 
    });

    act(() => {
      fireEvent(animatedView, 'panResponderMove', {
        nativeEvent: {},
        gestureState: { dx: 100, dy: 50 }, 
      });
    });

    act(() => {
      console.info('Завершили первое перетаскивание');
      fireEvent(animatedView, 'panResponderRelease');
    });

    const firstCall = setItemMock.mock.calls[0][0];
    const updatedItemFirstMove = firstCall(mockItem);
    
    const firstPosition = updatedItemFirstMove.position;
    
    console.info('Позиция после первого перетаскивания:', firstPosition);

    const expectedPositionAfterFirstMove = { x: 110, y: 60 }; // Прибавляем перемещение к первоначальной позиции
    expect(firstPosition).toEqual(expectedPositionAfterFirstMove); 
    console.info('Позиция совпадает с ожидаемой:', firstPosition);

    // Перетаскивание обратно
    act(() => {
      console.info('Начало второго перетаскивания');
      fireEvent(animatedView, 'panResponderGrant'); 
    });

    act(() => {
      fireEvent(animatedView, 'panResponderMove', {
        nativeEvent: {},
        gestureState: { dx: -100, dy: -50 }, 
      });
    });

    act(() => {
      fireEvent(animatedView, 'panResponderRelease'); 
    });

    const secondCall = setItemMock.mock.calls[1][0];
    const updatedItemSecondMove = secondCall(updatedItemFirstMove); 
    
    const finishPosition = updatedItemSecondMove.position; 
    console.info('Позиция после второго перетаскивания:', finishPosition);
    
    expect(finishPosition).toEqual(startPosition); // Должны совпадать с первоначальными

    // Отклонение
    if (finishPosition.x !== startPosition.x || finishPosition.y !== startPosition.y) {
      console.error('Отклонение:', {
        ожидаемая: startPosition,
        фактическая: finishPosition,
      });
    }
  });
});
