import { useState } from "react";
import PresentaitionalTodoApp from "./presentaitional-todo-app";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const ContainerTodoApp = () => {
    const [todo, setToDo] = useState<Todo[]>([]);
        const [newTodo, setNewTodo] = useState<string>('');
        const handleAddTodo = () =>{
          setToDo([...todo, {id: todo.length + 1, text: newTodo, completed: false}]);
          setNewTodo('');
        };
    
        const changeStatus = (id: number) => {
          const updatedTodo = [...todo];
          updatedTodo[id].completed = !updatedTodo[id].completed;
          setToDo(updatedTodo);
        }

        const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value);
  return (
    <PresentaitionalTodoApp
      newTodo={newTodo}
      todo={todo}
      handleAddTodo={handleAddTodo}
      changeStatus={changeStatus}
      onValueChange={onValueChange}
    />
  );
};

export default ContainerTodoApp;
