import { useState } from 'react';
import { TextInput } from 'react-native';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import styles from './add_task.styles';

interface AddTaskProps {
  id: number;
}

function AddTask({ id }: AddTaskProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const { items, setItem } = useItems();

  const handleInputChange = (text: string) => {
    setTaskTitle(text);
  };

  const handleKeyDown = (event: any) => {
    if (event.nativeEvent.key === 'Enter' && taskTitle.trim() !== '') {
      setItem(
        items.map(item =>
          item.id === id
            ? {
                ...item,
                tasks: [
                  ...item.tasks,
                  {
                    task_id: Number(Date.now()),
                    title: taskTitle,
                    isComplete: false,
                  },
                ],
              }
            : item
        )
      );

      setItem((prevItems: ItemType[]) =>
        prevItems.map(item =>
          item.id === id ? { ...item, isChange: false } : item
        )
      );

      setTaskTitle('');
    }
  };

  return (
    <TextInput
      style={styles.input}
      value={taskTitle}
      onChangeText={handleInputChange}
      onSubmitEditing={handleKeyDown} // Используем onSubmitEditing для обработки нажатия Enter
      placeholder="Add a new task"
      returnKeyType="done" // Кнопка Enter будет отображаться как "Done" на мобильных устройствах
    />
  );
}

export default AddTask;
