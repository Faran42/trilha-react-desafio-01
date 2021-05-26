import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    console.log('newTaskTitle:', newTaskTitle)

    if (newTaskTitle === '') {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const mappedTasks = tasks.map(item => {

      // item.id === id ? { ...item, done : !!item.done } :  item
      if(item.id === id){
        item.done = !item.done
      }

      console.log(item)
      return item
    })

    setTasks(mappedTasks)

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const filteredTasks = tasks.filter(item => item.id !== id)

    setTasks(filteredTasks)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}