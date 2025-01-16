import { useEffect, useState } from 'react'

import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem('state')) ?? {
    Good: 0,
    Neutral: 0,
    Bad: 0
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
    

  const handleReset = () => {
    setState({
      ...state,
      Good: 0,
      Neutral: 0,
      Bad: 0
  })
  }

  const totalFeedback = state.Good + state.Neutral + state.Bad;


  const updateFeedback = feedbackType => {
    
    if (feedbackType.item === 'Good') {
      setState({
        ...state,
        Good: state.Good + 1,
      })
    }
    if (feedbackType.item === 'Neutral') {
      setState({
        ...state,
        Neutral: state.Neutral + 1,
      })
    }
    if (feedbackType.item === 'Bad') {
      setState({
        ...state,
        Bad: state.Bad + 1,
      })
    }
  }

  

  return (
    <>
      <Description />
      <Options value={state} upDate={updateFeedback} btnReset={totalFeedback} handleReset={handleReset} />
      <Notification totalFeedback={totalFeedback} />
      <Feedback value={state} totalFeedback={totalFeedback} />
    </>
  )
}

export default App
