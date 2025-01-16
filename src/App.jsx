import { useEffect, useState } from 'react'

import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [state, setState] = useState(() => JSON.parse(localStorage.getItem('state')) ?? {
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);
    

  const handleReset = () => {
    setState({   
      good: 0,
      neutral: 0,
      bad: 0
  })
  }

  const [positiveFeedback, setpositiveFeedback] = useState(0);
  const totalFeedback = state.good + state.neutral + state.bad;
  

  const updateFeedback = feedbackType => {
    setState(prevState => {
      const updatedState = {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };

      const total = updatedState.good + updatedState.neutral + updatedState.bad;
      setpositiveFeedback(
        total ? Math.round((updatedState.good / total) * 100) : 0
      );

      return updatedState;
    });
  };


  return (
    <>
      <Description />
      <Options value={state} upDate={updateFeedback} btnReset={totalFeedback} handleReset={handleReset} />
      <Notification totalFeedback={totalFeedback} />
      <Feedback value={state} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
    </>
  )
}

export default App
