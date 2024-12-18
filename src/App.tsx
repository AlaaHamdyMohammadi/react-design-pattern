import './App.css'
import SolutionComponent from './components/react-design-patterns/children-component-pattern/solution-component'
import ExpensiveComponent from './components/react-design-patterns/children-component-pattern/expensive-component'

function App() {

  return (
    <>
      <div>
        <h1>React Design Patterns</h1>
        <h2>1- Children Component Pattern</h2>

        <SolutionComponent children={<ExpensiveComponent/>}/>
      </div>
    </>
  )
}

export default App
