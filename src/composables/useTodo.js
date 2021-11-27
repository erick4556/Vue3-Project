import { ref, computed } from "vue";
import { v4 as uuid4 } from "uuid";

const useTodo = (initialValue = []) => {
  const tasks = ref(initialValue);

  const addTask = ({ inputText }) => {
    /*  tasks.value.push({
      id: uuid4(),
      description: newTask.value,
      isCompleted: false,
    });
    newTask.value = ""; */
    //Uso de event
    tasks.value.push({
      id: uuid4(),
      description: inputText.value,
      isCompleted: false,
    });
  };

  const completeTask = (task) => {
    task.isCompleted = true;
  };

  const deleteTask = (taskRemoved) => {
    tasks.value = tasks.value.filter((t) => t.id !== taskRemoved.id);
  };

  const sizeOfCompletedTasks = computed(() => {
    const completedTasks = tasks.value.filter((task) => task.isCompleted);
    return completedTasks.length;
  });

  return {
    tasks,
    addTask,
    completeTask,
    deleteTask,
    sizeOfCompletedTasks,
  };
};

export default useTodo;
