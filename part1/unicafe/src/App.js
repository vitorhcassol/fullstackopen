import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App