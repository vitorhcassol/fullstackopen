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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name}
      exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

export default App