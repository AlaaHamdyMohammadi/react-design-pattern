import React from 'react'
import { Todo } from './container-todo-app';

interface TodoProps {
  newTodo: string;
  todo: Todo[];
  handleAddTodo: () => void;
  changeStatus: (id: number) => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PresentaitionalTodoApp = ({
  newTodo,
  todo,
  handleAddTodo,
  changeStatus,
  onValueChange,
}: TodoProps) => {
  return (
    <div>
      <input type="text" value={newTodo} onChange={onValueChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todo.map((todo, index) => (
          <div key={todo.id}>
            <span
              onClick={() => changeStatus(index)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentaitionalTodoApp
