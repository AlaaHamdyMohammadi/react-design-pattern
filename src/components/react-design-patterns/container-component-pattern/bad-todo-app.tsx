import { useState } from 'react';

type Todo = {
  id: number,
  text: string,
  completed: boolean,

}

const BadTodoApp = () => {
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
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todo.map((todo, index) => (
          <div key={todo.id}>
            <span onClick={() => changeStatus(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BadTodoApp
