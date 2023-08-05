const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part prt={props.part1} ex={props.exercises1}/>
      <Part prt={props.part2} ex={props.exercises2}/>
      <Part prt={props.part3} ex={props.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.prt} {props.ex}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + 
      props.exercises2 + 
      props.exercises3}
    </p>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
      exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App