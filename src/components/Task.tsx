import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { TaskType } from '../interface/TaskType';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../interface/ItemType';
import styles from './task.styles';

interface TaskProps {
  id: number;
  task_id: number;
  title: string;
  isComplete: boolean;
}

function Task({ id, task_id, title, isComplete }: TaskProps) {
  const { items, setItem } = useItems();

  function toggleComplete(itemId: number, taskId: number) {
    setItem(
      items.map((item: ItemType) =>
        item.id === itemId
          ? {
              ...item,
              tasks: item.tasks.map((task: TaskType) =>
                task.task_id === taskId ? { ...task, isComplete: !task.isComplete } : task
              ),
            }
          : item
      )
    );
  }

  return (
    <View style={styles.box} key={task_id}>
      <Checkbox
        value={isComplete}
        onValueChange={() => toggleComplete(id, task_id)}
        style={styles.checkbox}
      />
      <Text style={[styles.title, isComplete && styles.completed]}>
        {title}
      </Text>
    </View>
  );
}

export default Task;
