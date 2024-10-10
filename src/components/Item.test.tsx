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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockItem = {
    id: 1,
    tasks: [{ task_id: 1, title: 'first', isComplete: false }, { task_id: 2, title: 'second', isComplete: true }],
    position: { x: 0, y: 0 },
    isChange: false,
  };

  let component: any;

  beforeEach(() => {
    component = render(<Item {...mockItem} />);
  });

  test('Переместить элемент на новую позицию и оставить там', () => {
    const animatedView = component.getByTestId('animated-item'); 

    act(() => {
      fireEvent(animatedView, 'panResponderGrant'); 
    });

    act(() => {
      fireEvent(animatedView, 'panResponderMove', {
        nativeEvent: {},
        gestureState: { dx: 150, dy: 50 }, 
      });
    });

    expect(setItemMock).toHaveBeenCalledWith(expect.any(Function));

    act(() => {
      fireEvent(animatedView, 'panResponderRelease'); 
    });

    expect(setItemMock).toHaveBeenCalledWith(expect.any(Function));

    act(() => {
      fireEvent(animatedView, 'panResponderMove', {
        nativeEvent: {},
        gestureState: { dx: 0, dy: 0 }, 
      });
    });

    expect(setItemMock).toHaveBeenCalledTimes(2); 
  });
});
