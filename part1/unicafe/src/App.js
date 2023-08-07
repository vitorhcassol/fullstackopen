import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  const sumProps = props.props.reduce((acc, cur) => acc + cur, 0)
  if (sumProps === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text={'good'} value={props.props[0]}/>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={'neutral'} value={props.props[1]}/>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={'bad'} value={props.props[2]}/>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={'all'} value={props.props[3]}/>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={'average'} value={props.props[4]}/>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text={'positive'} value={props.props[5]}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)

  const addGood = () => {
    const atualizeGood = good + 1
    const atualizeAll = all + 1
    setGood(atualizeGood)
    addAll()
    setAverage((atualizeGood - bad) / atualizeAll)
    setPositive(atualizeGood / atualizeAll)
  }

  const addNeutral = () => {
    const atualizeNeutral = neutral + 1
    const atualizeAll = all + 1
    setNeutral(atualizeNeutral)
    addAll()
    setAverage((good - bad) / atualizeAll)
    setPositive(good / atualizeAll)
  }

  const addBad = () => {
    const atualizeBad = bad + 1
    const atualizeAll = all + 1
    setBad(atualizeBad)
    addAll()
    setAverage((good - atualizeBad) / atualizeAll)
    setPositive(good / atualizeAll)
  }

  const addAll = () => {
    const atualizeAll = all + 1
    setAll(atualizeAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={addGood} text={'good'} />
      <Button handleClick={addNeutral} text={'neutral'} />
      <Button handleClick={addBad} text={'bad'} />
      <Statistics props={[good, neutral, bad, all, average, positive]}/>
    </div>
  )
}

export default App