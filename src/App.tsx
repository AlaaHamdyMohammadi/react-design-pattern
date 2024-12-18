import './App.css'
import SolutionComponent from './components/react-design-patterns/children-component-pattern/solution-component'
import ExpensiveComponent from './components/react-design-patterns/children-component-pattern/expensive-component'
import ContainerTodoApp from './components/react-design-patterns/container-component-pattern/container-todo-app';

function App() {

  return (
    <>
      <div>
        <h1>React Design Patterns</h1>
        <SolutionComponent children={<ExpensiveComponent />} />

        <h2>2- Container Component Pattern</h2>
        <ContainerTodoApp />
      </div>
    </>
  );
}

export default App
